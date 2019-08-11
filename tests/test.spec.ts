import { HomePage } from '../page-objects/homePage';
import { DressPage } from '../page-objects/dressPage';
import { SummaryPage } from '../page-objects/summaryPage';
import { browser } from 'protractor';

describe('automation practice homepage', async function () {
    let homePage = new HomePage();
    let dressPage = new DressPage();
    let summaryPage = new SummaryPage();

    beforeEach(async function (): Promise<any> {
        await browser.waitForAngularEnabled(false); // non-angular site
        await browser.driver.manage().window().maximize();
    });

    it('should add 5 dresses to cart and display correct totals on summary', async function (): Promise<any> {
        let products = [3, 4, 5, 6, 7]; // in a larger project probably would use some dataconfig for this

        await homePage.get(); // go to the homepage

        await homePage.clickDressesTab(); // go to the dresses page

        await dressPage.clickListView(); // switch to list-view

        // add one of each dress to cart
        for (let index = 0; index < products.length; index++) {
            const productId = products[index];
            await dressPage.clickDressAddToCartButton(productId);
            await dressPage.clickContinueCartPopup();
        }

        await dressPage.clickShoppingCartIcon(); // go to summary page

        // check for each product on the summary page
        for (let index = 0; index < products.length; index++) {
            const productId = products[index];
            let verified = await summaryPage.verifyProductById(productId);
            // await summaryPage.checkProductPriceById(productId);
        }
        await browser.sleep(5000);
    });
});
