import { test, expect, type Page } from "@playwright/test";
import { whatsAppGroupLinks } from "src/pages/eventos/code-universe/data";

const mailingListId = "1098078";

const fakeUserData = {
  name: "Test User",
  email: "test@example.com",
  phone: "99999999999",
};

const utmParams = {
  utm_source: "test_utm_source",
  utm_medium: "test_utm_medium",
  utm_campaign: "test_utm_campaign",
  utm_term: "test_utm_term",
  utm_content: "test_utm_content",
};

function createSCKParam(utmParams: Record<string, string>): string {
  return Object.values(utmParams).join("|");
}

test.describe("Events page - Code Universe", () => {
  test.describe("With UTM params", () => {
    test.beforeEach(async ({ page }) => {
      const url = new URLSearchParams();

      for (const key in utmParams) {
        url.set(key, utmParams[key]);
      }

      await page.goto("/eventos/code-universe?" + url.toString());
    });

    test("should open the atendee modal when clicking on subscribe button and close it when clicking the backdrop", async ({
      page,
    }) => {
      const modal = page.locator("#add-atendee-modal");

      await page.locator("#add-atendee").click();
      await expect(modal).toHaveClass(/modal-open/);

      await page.locator(".modal-backdrop").click({ position: { x: 0, y: 0 } });
      await expect(modal).not.toHaveClass(/modal-open/);
    });

    test.describe("Subscrition flow", () => {
      async function testIfUserDataWasSavedInLocalStorage(page: Page) {
        const localStorageData = await page.evaluate(() => localStorage.getItem("user-data"));
        expect(localStorageData).toEqual(JSON.stringify(fakeUserData));
      }

      test("should fill the form and redirect to thank you page", async ({ page }) => {
        await page.locator("#add-atendee").click();

        const modal = page.locator("#add-atendee-modal");
        await expect(modal).toHaveClass(/modal-open/);

        await modal.locator('input[type="text"]').fill(fakeUserData.name);
        await modal.locator('input[type="email"]').fill(fakeUserData.email);
        await modal.locator('input[type="tel"]').fill(fakeUserData.phone);

        const requestPromise = page.waitForRequest(
          "https://n8nserver.vps.webdock.cloud/webhook/6e3a9809-16ad-45a0-b10a-f23ee775fd8f",
        );

        await modal.locator('button[type="submit"]').click();

        await testIfUserDataWasSavedInLocalStorage(page);

        const request = await requestPromise;

        const requestBody = request.postDataJSON();

        expect(request.method()).toBe("POST");
        expect(requestBody.mailingListId).toBe(mailingListId);
        expect(requestBody.name).toBe(fakeUserData.name);
        expect(requestBody.email).toBe(fakeUserData.email);
        expect(requestBody.phone).toBe(fakeUserData.phone);
        expect(requestBody.sck).toBe(createSCKParam(utmParams));

        const responseData = await request.response();

        expect(responseData).toBeDefined();

        await page.waitForURL("/eventos/code-universe/obrigado");
      });
    });
  });

  test.describe("Without UTM params", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/eventos/code-universe");
    });

    test("should open the atendee modal when clicking on subscribe button and close it when clicking the backdrop", async ({
      page,
    }) => {
      const modal = page.locator("#add-atendee-modal");

      await page.locator("#add-atendee").click();
      await expect(modal).toHaveClass(/modal-open/);

      await page.locator(".modal-backdrop").click({ position: { x: 0, y: 0 } });
      await expect(modal).not.toHaveClass(/modal-open/);
    });

    test.describe("Subscrition flow", () => {
      async function testIfUserDataWasSavedInLocalStorage(page: Page) {
        const localStorageData = await page.evaluate(() => localStorage.getItem("user-data"));
        expect(localStorageData).toEqual(JSON.stringify(fakeUserData));
      }

      test("should fill the form and redirect to thank you page", async ({ page }) => {
        await page.locator("#add-atendee").click();

        const modal = page.locator("#add-atendee-modal");
        await expect(modal).toHaveClass(/modal-open/);

        await modal.locator('input[type="text"]').fill(fakeUserData.name);
        await modal.locator('input[type="email"]').fill(fakeUserData.email);
        await modal.locator('input[type="tel"]').fill(fakeUserData.phone);

        const requestPromise = page.waitForRequest(
          "https://n8nserver.vps.webdock.cloud/webhook/6e3a9809-16ad-45a0-b10a-f23ee775fd8f",
        );

        await modal.locator('button[type="submit"]').click();

        await testIfUserDataWasSavedInLocalStorage(page);

        const request = await requestPromise;

        const requestBody = request.postDataJSON();

        expect(request.method()).toBe("POST");
        expect(requestBody.mailingListId).toBe(mailingListId);
        expect(requestBody.name).toBe(fakeUserData.name);
        expect(requestBody.email).toBe(fakeUserData.email);
        expect(requestBody.phone).toBe(fakeUserData.phone);

        const responseData = await request.response();

        expect(responseData).toBeDefined();

        await page.waitForURL("/eventos/code-universe/obrigado");
      });
    });
  });

  test.describe("Thanks Page", () => {
    test("should have a link to the home page", async ({ page }) => {
      await page.goto("/eventos/code-universe/obrigado");
      await page.getByText("Entrar no Grupo VIP").click();
      await page.waitForURL(whatsAppGroupLinks.marketingCampaign, { waitUntil: "domcontentloaded" });
      expect(await page.getByText("Code Universe #05").count()).toBe(1);
    });
  });
});
