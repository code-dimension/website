# E2E Tests

This directory contains end-to-end tests for the Code Dimension website using Playwright.

## Running Tests

To run the E2E tests:

```bash
npm run test:e2e
```

To run the tests in UI mode (if you have a display):

```bash
npm run test:e2e:ui
```

## Test Structure

- `tests/` - Contains the actual test files
- `test-results/` - Contains test results and reports (generated when tests run)

## Writing Tests

Tests are written using Playwright's test runner. Each test file should end with `.spec.ts`.

For more information about Playwright, see the [official documentation](https://playwright.dev/docs/intro).