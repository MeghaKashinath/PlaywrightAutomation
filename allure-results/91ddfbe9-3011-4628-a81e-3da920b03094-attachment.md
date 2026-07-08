# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> User registration test @master @sanity @regression
- Location: tests/AccountRegistration.spec.ts:41:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('a:has-text("Register")') resolved to 2 elements:
    1) <a href="https://naveenautomationlabs.com/opencart/index.php?route=account/register">Register</a> aka locator('#top-links').getByRole('link', { name: 'Register' })
    2) <a class="list-group-item" href="https://naveenautomationlabs.com/opencart/index.php?route=account/register">Register</a> aka locator('#column-right').getByRole('link', { name: 'Register' })

Call log:
  - waiting for locator('a:has-text("Register")')

```

# Test source

```ts
  1  | import { Page, expect, Locator } from '@playwright/test';
  2  | 
  3  | export class HomePage{
  4  | 
  5  |     private readonly page: Page;
  6  |     //locators
  7  |     private readonly lnkMyAccount: Locator;
  8  |     private readonly lnkRegister: Locator;
  9  |     private readonly linkLogin: Locator;
  10 |     private readonly txtSearchbox: Locator;
  11 |     private readonly btnSearch: Locator;
  12 | 
  13 | 
  14 |     //constructor
  15 |     constructor(page:Page){
  16 | 
  17 |         this.page=page;
  18 |         this.lnkMyAccount = page.locator('span:has-text("My Account")');
  19 |         this.lnkRegister = page.locator('a:has-text("Register")');
  20 |         this.linkLogin = page.locator('a:has-text("Login")');
  21 |         this.txtSearchbox = page.locator('input[placeholder="Search"]');
  22 |         this.btnSearch = page.locator('#search button[type="button"]');
  23 | 
  24 |     }
  25 | 
  26 |     //action methods
  27 | 
  28 |       // Check if HomePage exists
  29 |     async isHomePageExists(){
  30 | 
  31 |         let title:string = await this.page.title();
  32 |         if(title)
  33 |         {
  34 |             return true;
  35 |         }
  36 |         return false;
  37 |     }
  38 | 
  39 |  // Click "My Account" link
  40 |     async clickMyAccount(){
  41 |         try {
  42 |             await this.lnkMyAccount.click();
  43 |         } catch (error) {
  44 |             console.log(`Exception occurred while clicking 'My Account': ${error}`);
  45 |             throw error;
  46 |         }
  47 |     }
  48 | 
  49 |  // Click "Register" link
  50 |     async clickRegister(){
  51 |         try {
> 52 |             await this.lnkRegister.click();
     |                                    ^ Error: locator.click: Error: strict mode violation: locator('a:has-text("Register")') resolved to 2 elements:
  53 |         } catch (error) {
  54 |             console.log(`Exception occurred while clicking 'Register': ${error}`);
  55 |             throw error;
  56 |         }
  57 |     }
  58 | 
  59 |     // Click "Login" link
  60 |     async clickLogin(){
  61 |         try {
  62 |             await this.linkLogin.click();
  63 |         } catch (error) {
  64 |             console.log(`Exception occurred while clicking 'Login': ${error}`);
  65 |             throw error;
  66 |         }
  67 |     }
  68 | 
  69 |     // Enter product name in the search box
  70 |     async enterProductName(pName: string){
  71 |         try {
  72 |             await this.txtSearchbox.fill(pName);
  73 |         } catch (error) {
  74 |             console.log(`Exception occurred while entering product name: ${error}`);
  75 |             throw error;
  76 |         }
  77 |     }
  78 | 
  79 |     // Click the search button
  80 |     async clickSearch(){
  81 |         try {
  82 |             await this.btnSearch.click();
  83 |         } catch (error) {
  84 |             console.log(`Exception occurred while clicking 'Search': ${error}`);
  85 |             throw error;
  86 |         }
  87 |     }
  88 |     
  89 | 
  90 | }
```