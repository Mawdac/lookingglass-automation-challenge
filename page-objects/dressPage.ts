// import {browser, element, by, By, $, $$, ExpectedConditions}
import { browser, element, by } from 'protractor';

export class DressPage {
    gridView = element(by.css("a[title=\"Grid\"]")).element(by.css(".icon-th-list"));
    listView = element(by.css("a[title=\"List\"]")).element(by.css(".icon-th-list"));

    continueCartPopup = element(by.css(".continue"))

    async clickGridView(): Promise<any> {
        return await this.gridView.click();
    }

    async clickListView(): Promise<any> {
        return await this.listView.click();
    }

    async clickContinueCartPopup(): Promise<any> {
        return await this.continueCartPopup.click();
    }

    async clickDressAddToCartButton(index: any): Promise<any> {
        return await element.all(by.css("a[data-id-product=\"" + index + "\"]")).first().click();
    }
}
