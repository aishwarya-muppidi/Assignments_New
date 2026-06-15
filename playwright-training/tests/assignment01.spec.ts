import { test, expect } from '@playwright/test';

test('Parabank Home Page Validations', async ({ page }) => {

  //1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
  await page.goto("https://parabank.parasoft.com/parabank/index.htm");

  //2. verify application logo is displayed. 
  const logo = await page.locator('//img[@alt="ParaBank"]');
  await expect(logo).toBeVisible;
  console.log("Para Bank logo is displayed correctly");

  //3.Verify application caption displayed as "Experience the difference"
  const caption = await page.locator('//p[text()="Experience the difference"]');
  await expect(caption).toHaveText("Experience the difference");
  console.log("Parabank caption is matching with the expected value.");

  //4.Enter invalid username
  const username = await page.locator('//input[@name="username"]');
  await username.fill('Invlaid user');

  //5.Enter empty Password
  const pwd = await page.locator('//input[@name="password"]');
  await pwd.fill('');

  //6.Click on login button
  const button = await page.locator('//input[@type="submit"]');
  await button.click();

  //7.Verify the error message "Please enter a username and password."
  const errorMessage = await page.locator('//p[contains(text(),"Please enter a username")]');
  // Verify err msg text
  await expect(errorMessage).toHaveText('Please enter a username and password.');
  console.log("Error message is displayed and message is displayed as expected");

  //8. Click on Admin page link
  const hyperlink = await page.locator('//a[text()="Admin Page"]');
  await hyperlink.click();

  //9.select the option "soap" from dba mode radio button
  const radioButton = await page.locator('//input[@id="accessMode1"]');
  await radioButton.check();
  console.log("SOAP button checked")

  //10.scroll to element web service dropdown
  const loanProvider = await page.locator('//select[@name="loanProvider"]');
  await loanProvider.scrollIntoViewIfNeeded();

  //11.Select the option web service from the dropdown
  await loanProvider.selectOption({ index: 1 });
  console.log("Selected option 'Web Service' from the dropdown successfully.");

  //12.click on submit button
  const submt = await page.getByRole('button', { name: 'Submit' });
  await submt.click();

  //13.verify submission is successful by validating success message
  const successMessage = page.locator('//p//b[text()="Settings saved successfully."]');
  // Verify it is visible
  await expect(successMessage).toBeVisible();
  // Verify err msg text
  console.log("Settings saved successfully message is displayed.");

  //14.Locate services page link and Click on services page link
  const serviceslink = await page.locator('//ul[@class="leftmenu"]//a[text()="Services"]');//whats wrong?
  await serviceslink.click();

  //15.wait for service page
  const bookStoreServicesHeader = await page.locator('//span[text()="Bookstore services:"]');
  await expect(bookStoreServicesHeader).toBeVisible();
  console.log("Bookstore services header is visible.If an element on service page is visible means service page loaded successfully");

  //16.Scroll down till bookstore services table
  const target2 = page.locator('//span[text()="Bookstore services:"]');
  await target2.scrollIntoViewIfNeeded();

  // 17.get total rows of books store services table
  const rows = await page.locator('//span[text()="Bookstore services:"]//following-sibling::table[1]//tr');
  const totalRows = await rows.count();
  console.log(`Total number of rows:${totalRows}`);

  // 18.get total columns of books store services table
  const column = await page.locator('//span[text()="Bookstore services:"]//following-sibling::table[1]//tr[1]//td');
  const totalCol =await column.count();
  console.log(`Total number of column:${totalCol}`);

  // 19.Print table data (row wise and column wise data)
for(let i=1;i<=totalRows;i++)
{
  for(let j=1;j<=totalCol;j++)
  {
    const cell=await page.locator(`//span[text()="Bookstore services:"]//following-sibling::table[1]//tr[${i}]//td[${j}]`);
    const celldata=await cell.textContent();
    console.log(`Cell data at row ${i} and col ${j} is ${celldata}`);
  }
}
}); 