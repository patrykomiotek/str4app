import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173");
});

test("check component with context", async ({ page }) => {
  await expect(page.getByText("NO")).toBeVisible();

  await page.getByRole("button", { name: "Toggle value" }).click();
  await page.getByRole("button", { name: "Hello world" }).click();

  await page.waitForTimeout(1000);
  await expect(page.getByText("YES")).toBeVisible();
});
