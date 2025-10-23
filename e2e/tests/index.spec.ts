import { test, expect } from "@playwright/test";
import { courses } from "@shared/data/courses";

const fakePosts = `
<rss version="2.0">
  <channel>
    <item>
      <title>Fake Post 1</title>
      <link>https://blog.codedimension.com.br/fake-post-1</link>
      <description>Fake description 1</description>
      <image>https://via.placeholder.com/150</image>
    </item>
    <item>
      <title>Fake Post 2</title>
      <link>https://blog.codedimension.com.br/fake-post-2</link>
      <description>Fake description 2</description>
      <image>https://via.placeholder.com/150</image>
    </item>
  </channel>
</rss>
`;

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("https://blog.codedimension.com.br/rss.xml", (route) => {
      route.fulfill({
        status: 200,
        contentType: "application/rss+xml",
        body: fakePosts,
      });
    });
    await page.goto("/");
  });

  test("should scroll to courses section when clicking the banner button", async ({ page }) => {
    await page.getByText("Confira nossos cursos!").first().click();

    const coursesSection = page.locator('[scroll-target="courses-section"]').first();
    await expect(coursesSection).toBeInViewport();
  });

  test("should scroll to courses section when clicking the first section button", async ({ page }) => {
    // The button in the banner is the first one, so we take the second one
    await page.getByText("Confira nossos cursos!").nth(1).click();

    const coursesSection = page.locator('[scroll-target="courses-section"]').first();
    await expect(coursesSection).toBeInViewport();
  });

  test.describe("Courses section", () => {
    for (const course of courses) {
      test(`should navigate to ${course.url} when clicking "Acessar curso" for ${course.title}`, async ({ page }) => {
        const courseCard = page.locator(".card", { hasText: course.title });
        await courseCard.getByText("Acessar curso").click();

        await page.waitForURL(course.url);
        expect(page.url()).toContain(course.url);
      });
    }
  });

  test.describe("Blog posts section", () => {
    test("should navigate to the correct blog post page for Fake Post 1", async ({ page }) => {
      const blogCard = page.locator(".card", { hasText: "Fake Post 1" });
      await blogCard.getByText("Ler mais").click();

      const newPage = await page.waitForEvent("popup");
      await expect(newPage).toHaveURL("https://blog.codedimension.com.br/fake-post-1");
    });

    test("should navigate to the correct blog post page for Fake Post 2", async ({ page }) => {
      const blogCard = page.locator(".card", { hasText: "Fake Post 2" });
      await blogCard.getByText("Ler mais").click();

      const newPage = await page.waitForEvent("popup");
      await expect(newPage).toHaveURL("https://blog.codedimension.com.br/fake-post-2");
    });
  });
});
