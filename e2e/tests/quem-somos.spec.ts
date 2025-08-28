import { test, expect } from '@playwright/test';

test('should display quem-somos page correctly', async ({ page }) => {
  // Navigate to the quem-somos page
  await page.goto('/quem-somos');
  
  // Check the page title
  await expect(page).toHaveTitle('Code Dimension | Sobre a Code Dimension');
  
  // Check for the main heading
  await expect(page.getByText('Sobre a Code Dimension')).toBeVisible();
  
  // Check for the mission section
  await expect(page.getByText('Nossa missão')).toBeVisible();
  await expect(page.getByText('A Code Dimension foi criada por Henrique Custódia em 2023')).toBeVisible();
  
  // Check for the values section
  await expect(page.getByText('Nossos valores')).toBeVisible();
  await expect(page.getByText('colocamos nossos estudantes em primeiro lugar')).toBeVisible();
  
  // Check that the page contains key information
  await expect(page.getByText('compartilhar conhecimento de qualidade com a comunidade Angular')).toBeVisible();
  await expect(page.getByText('contribuir significativamente para o crescimento e aprimoramento da comunidade Angular no Brasil')).toBeVisible();
});