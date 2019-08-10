// import {browser, element, by, By, $, $$, ExpectedConditions}
import { browser, element, by } from 'protractor';

export class DressPage {
    gridView = element(by.css("a[title=\"Grid\"]")).element(by.css(".icon-th-list"));
    listView = element(by.css("a[title=\"List\"]")).element(by.css(".icon-th-list"));

    closeCartPopup = element(by.css("span[title=\"Close window\"]"))

    async clickGridView(): Promise<any> {
        return await this.gridView.click();
    }

    async clickListView(): Promise<any> {
        return await this.listView.click();
    }

    async clickCloseCartPopup(): Promise<any> {
        return await this.closeCartPopup.click();
    }

    async clickDressAddToCartButton(index: any): Promise<any> {
        return await element.all(by.css("a[data-id-product=\"" + index + "\"]")).first().click();
    }
}
