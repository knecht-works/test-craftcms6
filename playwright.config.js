import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  use: { baseURL: process.env.E2E_BASE_URL || process.env.KNECHT_INTERNAL_URL || 'http://localhost' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
})
