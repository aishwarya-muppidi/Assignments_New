import { test, expect } from '@playwright/test';

test('XPath Locator', async ({ page }) => {

    //Launch the para bank application. 
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //Locate the 'logo' image . 
    await page.locator('//img[@alt="ParaBank"]');

    //Locate the 'caption' text .
    await page.locator('//p[text()="Experience the difference"]');

    //Locate the 'Solutions' Menu. 
    await page.locator('//li[@class="Solutions"]');

    //Locate the 'About me' Menu
    await page.locator('ul[class="leftmenu" > li > a[href="about.htm"]');//whats wrong here?

    //Locate the 'services' Menu
    await page.locator('ul[class="leftmenu"] > li > a[href="services.htm"]');//whats wrong here?

    //Locate the 'Products' Menu
    await page.locator('ul[class="leftmenu"] > li > a[text()="Products"]');//whats wrong here?

    //Locate the 'locations' Menu
    await page.locator('ul[class="leftmenu"] > li > a[text()="Locations"]');//whats wrong here?

    //Locate the 'Admin Page' Menu
    await page.locator('//a[text()="Admin Page"]');

    //Locate the 'Home logo below welcome msg' 
    await page.locator('//a[text()="home"]');

    //Locate the 'contact logo below welcome msg' 
    await page.locator('//a[text()="contact"]');
    //Locate the 'Customer Login Label' 
    await page.locator('//h2[text()="Customer Login"]');
    //Locate the 'username Login Label' 
    await page.locator('//b[text()="Username"]');
    //Locate the 'username textbox' 
    await page.locator('//input[@name="username"]');
    //Locate the 'password  Label' 
    await page.locator('//b[text()="Password"]');
    //Locate the 'username textbox' 
    await page.locator('//input[@name="password"]');
    //Locate Login button
    await page.locator('//input[@type="submit"]');
    //Locate Forgot login info? hyperlink
    await page.locator('//a[text()="Forgot login info?"]');
    //Locate Register hyperlink
    await page.locator('//a[text()="Register"]');
    //Locate heading ParaSoft Demo Website
    await page.locator('//h1[text()="ParaSoft Demo Website"]');
    //locate first paragraph under Parasoft demo website
    await page.locator('//p[contains(text(),"ParaBank is a demo site")]');
    //locate second paragraph under Parasoft demo website
    await page.locator('//p[contains(text(),"All materials herein are used")]'); //what's wrong with this?
    //locate third paragraph under Parasoft demo website
    await page.locator('//p[contains(text(),"In other words: ParaBank is ")]');
    //locate fourth paragraph under Parasoft demo website
    await page.locator('//p[contains(text(),"For more information")]');
    //Locate footer Home
    await page.locator('//a[text()="Home"]');
    //Locate footer About us
    await page.locator('//div[id="footerPanel">ul>li>a[text()="About Us"]');//whats wrong?
    //locate footer Services
    await page.locator('//div[id="footerPanel">ul>li>a[text()="Services"]');//whats wrong?
    //locate footer Products
    await page.locator('//div[id="footerPanel">ul>li>a[text()="Services"]');//whats wrong?
    //locate footer Locations
    await page.locator('//div[id="footerPanel">ul>li>a[text()="Locations"]');
    //locate footer Forum
    await page.locator('//a[text()="Forum"]');
    //locate footer SiteMap
    await page.locator('//a[text()="Site Map"]');
    //locate footer Contact Us
    await page.locator('//a[text()="Contact Us"]');
    //locate copyright text
    await page.locator('//p[text()="© Parasoft. All rights reserved."]');


});