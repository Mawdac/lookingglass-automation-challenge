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

        expect(browser.getCurrentUrl()).toEqual("http://automationpractice.com/index.php?id_category=8&controller=category");

        await browser.sleep(2000);

        await dressPage.clickListView();

        await browser.sleep(2000);

        await dressPage.clickDressAddToCartButton(3);

        await browser.sleep(2000);

        await dressPage.clickCloseCartPopup();

        await browser.sleep(2000);
    });
});
