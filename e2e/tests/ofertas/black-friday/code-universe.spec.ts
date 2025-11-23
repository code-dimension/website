import { checkoutParcelado12x, checkoutParcelado12xComCupom } from "@partials/ofertas/black-friday/shared/links";
import { test, expect, type Page } from "@playwright/test";
import { mailingListId } from "@shared/data/mailing-lists";
import { whatsAppGroupLinks } from "src/pages/eventos/code-universe/data";

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

async function testIfUserDataWasSavedInLocalStorage(page: Page) {
  const localStorageData = await page.evaluate(() => localStorage.getItem("user-data"));
  expect(localStorageData).toEqual(JSON.stringify(fakeUserData));
}

async function testCollectLeadDataModal(page: Page) {
  const modal = page.locator("#add-lead-generic-modal");

  await expect(modal).toHaveClass(/modal-open/);

  await modal.locator('[data-field="name"] input').fill(fakeUserData.name);
  await modal.locator('[data-field="email"] input').fill(fakeUserData.email);
  await modal.locator('[data-field="phone"] input').fill(fakeUserData.phone);

  const requestPromise = page.waitForRequest(
    "https://n8nserver.vps.webdock.cloud/webhook/6e3a9809-16ad-45a0-b10a-f23ee775fd8f",
  );

  const modalSubmitBtn = await modal.locator('button[type="submit"]');

  await modalSubmitBtn.click();

  // await testIfUserDataWasSavedInLocalStorage(page);

  const request = await requestPromise;

  const requestBody = request.postDataJSON();

  expect(request.method()).toBe("POST");
  expect(requestBody.mailingListId).toBe(mailingListId.blackFridayCodeUniverse);
  expect(requestBody.name).toBe(fakeUserData.name);
  expect(requestBody.email).toBe(fakeUserData.email);
  expect(requestBody.phone).toBe(fakeUserData.phone);

  const responseData = await request.response();

  expect(responseData).not.toBeNull();
}

test.describe("Black Friday - Code Universe", () => {
  test.describe("Without UTM params", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/ofertas/black-friday");
    });

    test("should scroll to prices section when clicking the banner button", async ({ page }) => {
      await page.getByText("Quero Dominar Angular").first().click();

      const pricesSection = page.locator('[scroll-target="prices"]').first();
      await expect(pricesSection).toBeInViewport();
    });

    test.describe("When user is not student", () => {
      test("should go to the checkout page", async ({ page }) => {
        await page.route("**/webhook/6e3a9809-16ad-45a0-b10a-f23ee775fd8f", (route) =>
          route.fulfill({
            status: 200,
          }),
        );

        await page.getByText("Comprar parcelado em 12x sem juros!").first().click();

        await expect(page).toHaveURL("/ofertas/black-friday/escolha");

        await page.getByText("Não sou aluno, ainda!").first().click();

        await testCollectLeadDataModal(page);

        const url = new URL(checkoutParcelado12x);

        url.searchParams.set("name", fakeUserData.name);
        url.searchParams.set("email", fakeUserData.email);
        url.searchParams.set("phonenumber", fakeUserData.phone);

        await page.waitForURL(url.toString());
      });

      test("should go to the checkout page even if the data modal fails to collect user data", async ({ page }) => {
        await page.route("**/webhook/6e3a9809-16ad-45a0-b10a-f23ee775fd8f", (route) =>
          route.fulfill({
            status: 500,
            contentType: "application/json",
            body: JSON.stringify({ error: "Internal Server Error" }),
          }),
        );

        await page.getByText("Comprar parcelado em 12x sem juros!").first().click();

        await expect(page).toHaveURL("/ofertas/black-friday/escolha");

        await page.getByText("Não sou aluno, ainda!").first().click();

        await testCollectLeadDataModal(page);

        const url = new URL(checkoutParcelado12x);

        url.searchParams.set("name", fakeUserData.name);
        url.searchParams.set("email", fakeUserData.email);
        url.searchParams.set("phonenumber", fakeUserData.phone);

        await page.waitForURL(url.toString());
      });
    });

    test.describe("When user is student", () => {
      test("should go to the checkout page", async ({ page }) => {
        await page.route("**/webhook/v2/check-student", (route) => {
          route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify({ isStudent: true }),
          });
        });

        await page.route("**/webhook/6e3a9809-16ad-45a0-b10a-f23ee775fd8f", (route) =>
          route.fulfill({
            status: 200,
          }),
        );

        await page.getByText("Comprar parcelado em 12x sem juros!").first().click();

        await expect(page).toHaveURL("/ofertas/black-friday/escolha");

        await page.getByText("Sim, sou aluno!").first().click();

        await expect(page).toHaveURL("/ofertas/black-friday/escolha/verificacao");

        await page.locator("#user-email").fill(fakeUserData.email);

        const checkStudentRequestPromise = page.waitForRequest(
          "https://n8nserver.vps.webdock.cloud/webhook/v2/check-student",
        );

        await page.locator("#submit-btn").click();

        // await expect(page.locator("#submit-btn")).toHaveText("Verificando...");

        const checkStudentRequest = await checkStudentRequestPromise;

        const requestBody = checkStudentRequest.postDataJSON();

        expect(checkStudentRequest.method()).toBe("POST");
        expect(requestBody.email).toBe(fakeUserData.email);

        const responseData = await checkStudentRequest.response();

        expect(responseData).not.toBeNull();

        await expect(page).toHaveURL("/ofertas/black-friday/escolha/verificacao/sucesso");

        await page.locator("#start-checkout").click();

        await testCollectLeadDataModal(page);

        const url = new URL(checkoutParcelado12xComCupom);

        url.searchParams.set("name", fakeUserData.name);
        url.searchParams.set("email", fakeUserData.email);
        url.searchParams.set("phonenumber", fakeUserData.phone);

        await page.waitForURL(url.toString());
      });

      test("should show a validation error when user email is not registered", async ({ page }) => {
        await page.route("**/webhook/v2/check-student", (route) => {
          route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify({ isStudent: false }),
          });
        });

        await page.getByText("Comprar parcelado em 12x sem juros!").first().click();

        await expect(page).toHaveURL("/ofertas/black-friday/escolha");

        await page.getByText("Sim, sou aluno!").first().click();

        await expect(page).toHaveURL("/ofertas/black-friday/escolha/verificacao");

        await page.locator("#user-email").fill(fakeUserData.email);

        const checkStudentRequestPromise = page.waitForRequest(
          "https://n8nserver.vps.webdock.cloud/webhook/v2/check-student",
        );

        await page.locator("#submit-btn").click();

        // await expect(page.locator("#submit-btn")).toHaveText("Verificando...");

        const checkStudentRequest = await checkStudentRequestPromise;

        const requestBody = checkStudentRequest.postDataJSON();

        expect(checkStudentRequest.method()).toBe("POST");
        expect(requestBody.email).toBe(fakeUserData.email);

        const responseData = await checkStudentRequest.response();

        expect(responseData).not.toBeNull();

        const userEmailValidation = page.locator("#user-email-validation");
        await expect(userEmailValidation).toBeVisible();
        await expect(userEmailValidation).toHaveText("Email não cadastrado como aluno.");

        await expect(page).toHaveURL("/ofertas/black-friday/escolha/verificacao");
      });

      test("should show a validation error when server respond with 500 error", async ({ page }) => {
        await page.route("**/webhook/v2/check-student", (route) => {
          route.fulfill({
            status: 500,
          });
        });

        await page.getByText("Comprar parcelado em 12x sem juros!").first().click();

        await expect(page).toHaveURL("/ofertas/black-friday/escolha");

        await page.getByText("Sim, sou aluno!").first().click();

        await expect(page).toHaveURL("/ofertas/black-friday/escolha/verificacao");

        await page.locator("#user-email").fill(fakeUserData.email);

        const checkStudentRequestPromise = page.waitForRequest(
          "https://n8nserver.vps.webdock.cloud/webhook/v2/check-student",
        );

        await page.locator("#submit-btn").click();

        // await expect(page.locator("#submit-btn")).toHaveText("Verificando...");

        const checkStudentRequest = await checkStudentRequestPromise;

        const requestBody = checkStudentRequest.postDataJSON();

        expect(checkStudentRequest.method()).toBe("POST");
        expect(requestBody.email).toBe(fakeUserData.email);

        const responseData = await checkStudentRequest.response();

        expect(responseData).not.toBeNull();

        const userEmailValidation = page.locator("#user-email-validation");
        await expect(userEmailValidation).toBeVisible();
        await expect(userEmailValidation).toHaveText("Algo deu errado, tente novamente.");

        await expect(page).toHaveURL("/ofertas/black-friday/escolha/verificacao");
      });
    });
  });

  test.describe("With UTM params", () => {
    let utmSearchParams;

    test.beforeEach(async ({ page }) => {
      const searchParams = new URLSearchParams();

      for (const key in utmParams) {
        searchParams.set(key, utmParams[key]);
      }

      searchParams.set("sck", createSCKParam(utmParams));

      utmSearchParams = searchParams.toString();

      await page.goto(`/ofertas/black-friday?${utmSearchParams}`);
    });

    test("should scroll to prices section when clicking the banner button", async ({ page }) => {
      await page.getByText("Quero Dominar Angular").first().click();

      const pricesSection = page.locator('[scroll-target="prices"]').first();
      await expect(pricesSection).toBeInViewport();
    });

    test.describe("When user is not student", () => {
      test("should go to the checkout page", async ({ page }) => {
        await page.route("**/webhook/6e3a9809-16ad-45a0-b10a-f23ee775fd8f", (route) =>
          route.fulfill({
            status: 200,
          }),
        );

        await expect(page.getByText("Comprar parcelado em 12x sem juros!")).toHaveAttribute(
          "href",
          `/ofertas/black-friday/escolha?${utmSearchParams}`,
        );

        await page.getByText("Comprar parcelado em 12x sem juros!").first().click();

        await expect(page).toHaveURL(`/ofertas/black-friday/escolha?${utmSearchParams}`);

        await page.getByText("Não sou aluno, ainda!").first().click();

        await testCollectLeadDataModal(page);

        const url = new URL(checkoutParcelado12x);

        url.searchParams.set("sck", createSCKParam(utmParams));

        for (const key in utmParams) {
          url.searchParams.set(key, utmParams[key]);
        }

        url.searchParams.set("name", fakeUserData.name);
        url.searchParams.set("email", fakeUserData.email);
        url.searchParams.set("phonenumber", fakeUserData.phone);

        await page.waitForURL(url.toString());
      });

      test("should go to the checkout page even if the data modal fails to collect user data", async ({ page }) => {
        await page.route("**/webhook/6e3a9809-16ad-45a0-b10a-f23ee775fd8f", (route) =>
          route.fulfill({
            status: 500,
            contentType: "application/json",
            body: JSON.stringify({ error: "Internal Server Error" }),
          }),
        );

        await expect(page.getByText("Comprar parcelado em 12x sem juros!")).toHaveAttribute(
          "href",
          `/ofertas/black-friday/escolha?${utmSearchParams}`,
        );

        await page.getByText("Comprar parcelado em 12x sem juros!").first().click();

        await expect(page).toHaveURL(`/ofertas/black-friday/escolha?${utmSearchParams}`);

        await page.getByText("Não sou aluno, ainda!").first().click();

        await testCollectLeadDataModal(page);

        const url = new URL(checkoutParcelado12x);

        url.searchParams.set("sck", createSCKParam(utmParams));

        for (const key in utmParams) {
          url.searchParams.set(key, utmParams[key]);
        }

        url.searchParams.set("name", fakeUserData.name);
        url.searchParams.set("email", fakeUserData.email);
        url.searchParams.set("phonenumber", fakeUserData.phone);

        await page.waitForURL(url.toString());
      });
    });

    test.describe("When user is student", () => {
      test("should go to the checkout page", async ({ page }) => {
        await page.route("**/webhook/v2/check-student", (route) => {
          route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify({ isStudent: true }),
          });
        });

        await page.route("**/webhook/6e3a9809-16ad-45a0-b10a-f23ee775fd8f", (route) =>
          route.fulfill({
            status: 200,
          }),
        );

        await expect(page.getByText("Comprar parcelado em 12x sem juros!")).toHaveAttribute(
          "href",
          `/ofertas/black-friday/escolha?${utmSearchParams}`,
        );

        await page.getByText("Comprar parcelado em 12x sem juros!").first().click();

        await expect(page).toHaveURL(`/ofertas/black-friday/escolha?${utmSearchParams}`);

        await page.getByText("Sim, sou aluno!").first().click();

        await expect(page).toHaveURL(`/ofertas/black-friday/escolha/verificacao?${utmSearchParams}`);

        await page.locator("#user-email").fill(fakeUserData.email);

        const checkStudentRequestPromise = page.waitForRequest(
          "https://n8nserver.vps.webdock.cloud/webhook/v2/check-student",
        );

        await page.locator("#submit-btn").click();

        // await expect(page.locator("#submit-btn")).toHaveText("Verificando...");

        const checkStudentRequest = await checkStudentRequestPromise;

        const requestBody = checkStudentRequest.postDataJSON();

        expect(checkStudentRequest.method()).toBe("POST");
        expect(requestBody.email).toBe(fakeUserData.email);

        const responseData = await checkStudentRequest.response();

        expect(responseData).not.toBeNull();

        await expect(page).toHaveURL(`/ofertas/black-friday/escolha/verificacao/sucesso?${utmSearchParams}`);

        await page.locator("#start-checkout").click();

        await testCollectLeadDataModal(page);

        const url = new URL(checkoutParcelado12xComCupom);

        url.searchParams.set("sck", createSCKParam(utmParams));

        for (const key in utmParams) {
          url.searchParams.set(key, utmParams[key]);
        }

        url.searchParams.set("name", fakeUserData.name);
        url.searchParams.set("email", fakeUserData.email);
        url.searchParams.set("phonenumber", fakeUserData.phone);

        await page.waitForURL(url.toString());
      });

      test("should show a validation error when user email is not registered", async ({ page }) => {
        await page.route("**/webhook/v2/check-student", (route) => {
          route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify({ isStudent: false }),
          });
        });

        await expect(page.getByText("Comprar parcelado em 12x sem juros!")).toHaveAttribute(
          "href",
          `/ofertas/black-friday/escolha?${utmSearchParams}`,
        );

        await page.getByText("Comprar parcelado em 12x sem juros!").first().click();

        await expect(page).toHaveURL(`/ofertas/black-friday/escolha?${utmSearchParams}`);

        await page.getByText("Sim, sou aluno!").first().click();

        await expect(page).toHaveURL(`/ofertas/black-friday/escolha/verificacao?${utmSearchParams}`);

        await page.locator("#user-email").fill(fakeUserData.email);

        const checkStudentRequestPromise = page.waitForRequest(
          "https://n8nserver.vps.webdock.cloud/webhook/v2/check-student",
        );

        await page.locator("#submit-btn").click();

        // await expect(page.locator("#submit-btn")).toHaveText("Verificando...");

        const checkStudentRequest = await checkStudentRequestPromise;

        const requestBody = checkStudentRequest.postDataJSON();

        expect(checkStudentRequest.method()).toBe("POST");
        expect(requestBody.email).toBe(fakeUserData.email);

        const responseData = await checkStudentRequest.response();

        expect(responseData).not.toBeNull();

        const userEmailValidation = page.locator("#user-email-validation");
        await expect(userEmailValidation).toBeVisible();
        await expect(userEmailValidation).toHaveText("Email não cadastrado como aluno.");

        await expect(page).toHaveURL(`/ofertas/black-friday/escolha/verificacao?${utmSearchParams}`);
      });

      test("should show a validation error when server respond with 500 error", async ({ page }) => {
        await page.route("**/webhook/v2/check-student", (route) => {
          route.fulfill({
            status: 500,
          });
        });

        await expect(page.getByText("Comprar parcelado em 12x sem juros!")).toHaveAttribute(
          "href",
          `/ofertas/black-friday/escolha?${utmSearchParams}`,
        );

        await page.getByText("Comprar parcelado em 12x sem juros!").first().click();

        await expect(page).toHaveURL(`/ofertas/black-friday/escolha?${utmSearchParams}`);

        await page.getByText("Sim, sou aluno!").first().click();

        await expect(page).toHaveURL(`/ofertas/black-friday/escolha/verificacao?${utmSearchParams}`);

        await page.locator("#user-email").fill(fakeUserData.email);

        const checkStudentRequestPromise = page.waitForRequest(
          "https://n8nserver.vps.webdock.cloud/webhook/v2/check-student",
        );

        await page.locator("#submit-btn").click();

        // await expect(page.locator("#submit-btn")).toHaveText("Verificando...");

        const checkStudentRequest = await checkStudentRequestPromise;

        const requestBody = checkStudentRequest.postDataJSON();

        expect(checkStudentRequest.method()).toBe("POST");
        expect(requestBody.email).toBe(fakeUserData.email);

        const responseData = await checkStudentRequest.response();

        expect(responseData).not.toBeNull();

        const userEmailValidation = page.locator("#user-email-validation");
        await expect(userEmailValidation).toBeVisible();
        await expect(userEmailValidation).toHaveText("Algo deu errado, tente novamente.");

        await expect(page).toHaveURL(`/ofertas/black-friday/escolha/verificacao?${utmSearchParams}`);
      });
    });
  });
});
