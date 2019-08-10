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
        await homePage.get(); // go to the homepage

        await homePage.clickDressesTab(); // go to the dresses page

        await dressPage.clickListView(); // switch to list-view

        // add one of each dress to cart
        for (let index = 3; index < 8; index++) { // TODO: probably several better ways to do this loop
            await dressPage.clickDressAddToCartButton(index);
            await dressPage.clickContinueCartPopup();
        }

        await dressPage.clickShoppingCartIcon(); // go to summary page

        await browser.sleep(5000);
    });
});
