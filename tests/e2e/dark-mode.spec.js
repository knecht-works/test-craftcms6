import { test, expect } from '@playwright/test'

test('dark mode toggle switches theme and persists across reloads', async ({ page }) => {
  await page.goto('/')
  const body = page.locator('body')
  const toggle = page.locator('nav #theme-toggle')

  await expect(toggle).toBeVisible()
  await expect(body).toHaveClass(/kit-light/)
  await expect(toggle).toHaveAttribute('aria-pressed', 'false')

  await toggle.click()
  await expect(body).not.toHaveClass(/kit-light/)
  await expect(toggle).toHaveAttribute('aria-pressed', 'true')

  await page.reload()
  await expect(body).not.toHaveClass(/kit-light/)
  await expect(toggle).toHaveAttribute('aria-pressed', 'true')

  await toggle.click()
  await expect(body).toHaveClass(/kit-light/)
  await page.reload()
  await expect(body).toHaveClass(/kit-light/)
})
