import { precoAVista, precoParcelado12x } from "@partials/testes-automatizados/shared/prices";
import { test, expect, type Page } from "@playwright/test";
import { mailingListId } from "@shared/data/mailing-lists";

const fakeUserData = {
  name: "Test User",
  email: "test@example.com",
  phone: "99999999999",
};

test.describe("Cursos page - Testes Automatizados", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cursos/testes-automatizados");
  });

  test("should scroll to prices section when clicking the banner button", async ({ page }) => {
    await page.getByText("Quero aprender a testar de verdade").first().click();

    const pricesSection = page.locator('[scroll-target="prices"]').first();
    await expect(pricesSection).toBeInViewport();
  });

  test("should open the lead modal when clicking the purchase buttons and close it when clicking the backdrop", async ({
    page,
  }) => {
    const modal = page.locator("#add-lead-modal");

    await page.locator("#comprar-parcelado").click();
    await expect(modal).toHaveClass(/modal-open/);

    await page.locator(".modal-backdrop").click({ position: { x: 0, y: 0 } });
    await expect(modal).not.toHaveClass(/modal-open/);

    await page.locator("#comprar-a-vista").click();
    await expect(modal).toHaveClass(/modal-open/);

    await page.locator(".modal-backdrop").click({ position: { x: 0, y: 0 } });
    await expect(modal).not.toHaveClass(/modal-open/);
  });

  test.describe("Purchase flow", () => {
    async function testIfUserDataWasSavedInLocalStorage(page: Page) {
      const localStorageData = await page.evaluate(() => localStorage.getItem("user-data"));
      expect(localStorageData).toEqual(JSON.stringify(fakeUserData));
    }

    async function testPurchaseFlow({
      btnSelector,
      checkoutUrl,
      page,
    }: {
      page: Page;
      btnSelector: string;
      checkoutUrl: string;
    }) {
      await page.locator(btnSelector).click();

      const modal = page.locator("#add-lead-modal");
      await expect(modal).toHaveClass(/modal-open/);

      await modal.locator('input[type="text"]').fill(fakeUserData.name);
      await modal.locator('input[type="email"]').fill(fakeUserData.email);
      await modal.locator('input[type="tel"]').fill(fakeUserData.phone);

      const requestPromise = page.waitForRequest(
        "https://n8nserver.vps.webdock.cloud/webhook/6e3a9809-16ad-45a0-b10a-f23ee775fd8f"
      );

      await modal.locator('button[type="submit"]').click();

      await testIfUserDataWasSavedInLocalStorage(page);
      
      const request = await requestPromise;

      const requestBody = request.postDataJSON();

      expect(request.method()).toBe("POST");
      expect(requestBody.mailingListId).toBe(mailingListId.testesAutomatizadosComAngular);
      expect(requestBody.name).toBe(fakeUserData.name);
      expect(requestBody.email).toBe(fakeUserData.email);
      expect(requestBody.phone).toBe(fakeUserData.phone);

      const responseData = await request.response();

      expect(responseData).toBeDefined();

      const url = new URL(checkoutUrl);
      url.searchParams.set("name", fakeUserData.name);
      url.searchParams.set("email", fakeUserData.email);
      url.searchParams.set("phonenumber", fakeUserData.phone);

      await page.waitForURL(url.toString());
    }

    test("[comprar-parcelado] should fill the form and redirect to checkout", async ({ page }) => {
      await testPurchaseFlow({ page, btnSelector: "#comprar-parcelado", checkoutUrl: precoParcelado12x });
    });

    test("[comprar-a-vista] should fill the form and redirect to checkout", async ({ page }) => {
      await testPurchaseFlow({ page, btnSelector: "#comprar-a-vista", checkoutUrl: precoAVista });
    });
  });
});
