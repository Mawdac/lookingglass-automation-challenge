import { HomePage } from '../page-objects/homePage';
import { DressPage } from '../page-objects/dressPage';
import { browser } from 'protractor';

describe('automation practice homepage', function () {
    let homePage = new HomePage();
    let dressPage = new DressPage();

    beforeEach(async function (): Promise<any> {
        await browser.waitForAngularEnabled(false); // non-angular site
        await browser.driver.manage().window().maximize();
    });

    it('should navigate to the homepage', async function (): Promise<any> {
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

        await browser.sleep(5000);
    });
});
