// spec: specs/test-plan.md

import { test, expect } from '@playwright/test';

test.describe('Adding New Todos', () => {
  test('Login and Verify', async ({ page }) => {
    // 1. Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');

    // 2. Enter Username as "standard_user" at locator //input[@placeholder="Username"]
    await page.locator('[data-test="username"]').fill('standard_user');

    // 3. Enter Password as "secret_sauce" at locator //input[@placeholder="Password"]
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // 4. Click login button, use locator at locator //input[@type="submit"]
    await page.locator('[data-test="login-button"]').click();

    // 5. Page loads, Wait until network is idle and url contains substring as inventory
    await new Promise(f => setTimeout(f, 5 * 1000));

    // Expected Results: page contains text Products and that element is attached to dom
    await expect(page.locator('[data-test="title"]')).toBeVisible();
  });
});
