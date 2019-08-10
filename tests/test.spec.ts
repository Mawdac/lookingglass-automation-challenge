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
        await homePage.get();

        await homePage.clickDressesTab();

        await dressPage.clickListView();

        for (let index = 3; index < 8; index++) {
            await dressPage.clickDressAddToCartButton(index);
            await dressPage.clickContinueCartPopup();
        }

        await dressPage.clickShoppingCartIcon();

        await browser.sleep(5000);
    });
});
