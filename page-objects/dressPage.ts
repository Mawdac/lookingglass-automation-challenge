// import {browser, element, by, By, $, $$, ExpectedConditions}
import { browser, element, by } from 'protractor';

/**
 * This is the Dresses page-object. All functionality on the dresses
 * page is contained in this class.
 *
 * @export
 * @class DressPage
 */
export class DressPage {
    /**
     * This is the grid-view icon. Clicking it changes the view to 'grid'
     *
     * @memberof DressPage
     */
    gridView = element(by.css("a[title=\"Grid\"]")).element(by.css(".icon-th-list"));


    /**
     * This is the list-view icon. Clicking it changes the view to 'list'
     *
     * @memberof DressPage
     */
    listView = element(by.css("a[title=\"List\"]")).element(by.css(".icon-th-list"));

    /**
     * This is the shopping cart icon at the top of the page. Clicking it
     * takes you to the summary page.
     *
     * @memberof DressPage
     */
    shoppingCartIcon = element(by.css("a[title=\"View my shopping cart\"]"));

    /**
     * This is the continue button on the cart popup that appears when a user
     * adds an item to their cart. Clicking this effectively closes the popup.
     *
     * @memberof DressPage
     */
    continueCartPopup = element(by.css(".continue"))


    /**
     * This clicks the grid view icon.
     *
     * @returns {Promise<any>} Returns a promise when the grid view icon has been clicked.
     * @memberof DressPage
     */
    async clickGridView(): Promise<any> {
        return await this.gridView.click();
    }

    /**
     * This clicks the list view icon.
     *
     * @returns {Promise<any>} Returns a promise when the grid view icon has been clicked.
     * @memberof DressPage
     */
    async clickListView(): Promise<any> {
        return await this.listView.click();
    }

    /**
     * This clicks the shopping cart icon.
     *
     * @returns {Promise<any>} Returns a promise when the shopping cart icon has been clicked.
     * @memberof DressPage
     */
    async clickShoppingCartIcon(): Promise<any> {
        return await this.shoppingCartIcon.click();
    }

    /**
     * This clicks 'Continue Shopping' on the cart popup that appears when a user adds an item
     * to their cart.
     *
     * @returns {Promise<any>} Returns a promise when the 'Continue Shopping' button has been clicked.
     * @memberof DressPage
     */
    async clickContinueCartPopup(): Promise<any> {
        await browser.sleep(500); // minor sleep to prevent timing issues with popup displaying the element
        return await this.continueCartPopup.click();
    }

    /**
     * This clicks the 'Add to Cart' button for the product ID of a given dress. Note: This requires
     * list-view in order to work.
     *
     * @param {*} productID The product ID of the dress you want to add to cart.
     * @returns {Promise<any>} Returns a promise when the 'Add to Cart' button has been clicked.
     * @memberof DressPage
     * @example
     * dressPage.clickListView(); // Makes the 'Add to Cart' button visible
     * dressPage.clickDressAddToCartButton(3) // This adds the dress with product ID 3 to the cart
     */
    async clickDressAddToCartButton(productID: any): Promise<any> {
        return await element.all(by.css("a[data-id-product=\"" + productID + "\"]")).first().click();
    }
}
