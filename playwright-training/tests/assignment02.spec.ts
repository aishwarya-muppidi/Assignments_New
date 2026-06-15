import { test, expect } from '@playwright/test'
test('DemoQA', async ({ page }) => {

    //1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
    await page.goto("https://demoqa.com/automation-practice-form");

    //2. Wait for Page-load
    const toolsQA = await page.locator('//img[@src="/assets/Toolsqa-DZdwt2ul.jpg"]');
    await expect(toolsQA).toBeVisible;
    console.log("ToolsQA Page loaded successfully");

    //3. Enter First name and Last name

    const firstName = await page.locator('//input[@id="firstName"]');
    await firstName.fill("Aishwarya");
    const lastName = await page.locator('//input[@id="lastName"]');
    await lastName.fill("Muppidi");

    //4. Enter Email
    const email = await page.locator('//input[@id="userEmail"]');
    await email.fill('aishwarya.muppidi0603@gmail.com');

    //5. Select Gender (Male)
    const gender = await page.locator('//input[@value="Female"]');
    await gender.check();

    //6. Enter mobile number
    const mobileNum = await page.locator('//input[@placeholder="Mobile Number"]');
    mobileNum.fill("9986509779");

    //7.Select DOB (1-Feb-1991)
    const openCalender = page.locator('//input[@id="dateOfBirthInput"]');
    openCalender.click();

    //8.Search and Select Computer Science and English
    const subject = await page.locator('//div[@class="subjects-auto-complete__control css-13cymwt-control"]');
    await subject.fill("computer science");
    await subject.press('Enter');

    //9.Select Hobbies as Sports and Reading
    const hobby1 = await page.locator('//input[@id="hobbies-checkbox-1"]');
    await hobby1.check()
    const hobby2 = await page.locator('//input[@id="hobbies-checkbox-2"]');
    await hobby2.check()
    //10.Upload photo
    const uploadPhoto = await page.locator('//input[@label="Select picture"]');
    uploadPhoto.click();
    //11.Submit Details
    await page.locator('//button[text()="Submit"]');

}


);