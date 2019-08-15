import { HomePage } from '../page-objects/homePage';
import { ProductPage } from '../page-objects/productPage';
import { SummaryPage } from '../page-objects/summaryPage';
import { browser } from 'protractor';

describe('Add all dresses to cart and verify price', async function () {
    let homePage = new HomePage();
    let productPage = new ProductPage();
    let summaryPage = new SummaryPage();
    let products = [3, 4, 5, 6, 7]; // in a larger project would grab this from data config or database

    beforeAll(async function () {
        await browser.waitForAngularEnabled(false); // non-angular site
        await browser.driver.manage().window().maximize();
    });

    afterAll(async function () {
        await browser.driver.manage().deleteAllCookies();
    });

    it('should go to the homepage', async function () {
        await homePage.get();
    });

    it('should go to the dresses page', async function () {
        await homePage.clickDressesTab();
    });

    it('should switch to list-view', async function () {
        await productPage.clickListView();
    });

    for (let index = 0; index < products.length; index++) {
        const productId = products[index];
        it('should add dress with product id:' + productId + ' to cart', async function () {
            await productPage.clickAddToCartButton(productId);
            await productPage.clickContinueCartPopup();
        });
    }

    it('should go to summary page', async function () {
        await productPage.clickShoppingCartIcon();
    });


    for (let index = 0; index < products.length; index++) {
        const productId = products[index];
        it('should display dress with product id:' + productId + ' on the summary page', async function () {
            await summaryPage.verifyProductById(productId);
        });

        it('should display correct price for product ' + productId, async function () {
            await summaryPage.verifyProductPriceById(productId);
        });
    }

    it('should display the correct totals', async function () {
        await summaryPage.verifyTotalPrice();
    });
});
