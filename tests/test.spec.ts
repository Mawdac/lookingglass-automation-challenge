import { HomePage } from '../page-objects/homePage';
import { DressPage } from '../page-objects/dressPage';
import { SummaryPage } from '../page-objects/summaryPage';
import { browser } from 'protractor';

describe('Test 1 - LookingGlass Automation Challenge', async function () {
    let homePage = new HomePage();
    let dressPage = new DressPage();
    let summaryPage = new SummaryPage();
    let products = [3,4,5,6,7]; // in a larger project would grab this from data config or database

    beforeAll(async function () {
        await browser.waitForAngularEnabled(false); // non-angular site
        await browser.driver.manage().window().maximize();
    });

    it('should go to the homepage', async function () {
        await homePage.get();
    });

    it('should go to the dresses page', async function () {
        await homePage.clickDressesTab();
    });

    it('should switch to list-view', async function () {
        await dressPage.clickListView();
    });

    it('should add one of each dress to cart', async function () {
        for (let index = 0; index < products.length; index++) {
            const productId = products[index];
            await dressPage.clickDressAddToCartButton(productId);
            await dressPage.clickContinueCartPopup();
        }
    });

    it('should go to summary page', async function () {
        await dressPage.clickShoppingCartIcon();
    });

    it('should show each product on the summary page', async function () {
        for (let index = 0; index < products.length; index++) {
            const productId = products[index];
            let verified = await summaryPage.verifyProductById(productId);
            // await summaryPage.checkProductPriceById(productId);
        }
    });
});
