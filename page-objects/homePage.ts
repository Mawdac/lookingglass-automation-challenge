// import {browser, element, by, By, $, $$, ExpectedConditions}
import { browser, element, by } from 'protractor';

export class HomePage {
    dressesTab = element.all(by.css("a[title=\"Dresses\"]")).last();

    async get(): Promise<any> {
        return await browser.get('http://automationpractice.com/');
    }

    async clickDressesTab(): Promise<any> {
        return await this.dressesTab.click();
    }
}
