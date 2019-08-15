// import {browser, element, by, By, $, $$, ExpectedConditions}
import { browser, element, by } from 'protractor';

/**
 * This is the HomePage page-object. All functionality on the HomePage
 * is contained in this class.
 *
 * @export
 * @class HomePage
 */
export class HomePage {
    /**
     * This is the dress tab. Clicking it takes the user to the 
     * dresses product page.
     *
     * @memberof HomePage
     */
    dressesTab = element.all(by.css("a[title=\"Dresses\"]")).last();

    /**
     * This is the women tab. Clicking it takes the user to the
     * women product page.
     *
     * @memberof HomePage
     */
    womenTab = element(by.css("a[title=\"Women\"]"));

    /**
     * This takes you to the home page of automationpractice.com.
     *
     * @returns {Promise<any>} Returns a promise when the page has loaded.
     * @memberof HomePage
     */
    async get(): Promise<any> {
        return await browser.get('http://automationpractice.com/');
    }

    /**
     * This clicks the dresses tab.
     *
     * @returns {Promise<any>} Returns a promise when the dresses tab has been clicked.
     * @memberof HomePage
     */
    async clickDressesTab(): Promise<any> {
        return await this.dressesTab.click();
    }

    /**
     * This clicks the women tab.
     *
     * @returns {Promise<any>} Returns a promise when the women tab has been clicked.
     * @memberof HomePage
     */
    async clickWomenTab(): Promise<any> {
        return await this.womenTab.click();
    }
}
