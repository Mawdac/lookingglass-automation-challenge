import { browser, element, by, ElementFinder } from 'protractor';

export class SummaryPage {
    /**
     * This verifies that a given product is displayed on the summary page
     *
     * @param {*} productId The product ID of the product to be verified
     * @returns {Promise<any>} Returns a promise when the element is found to be displayed
     * @memberof SummaryPage
     */
    async verifyProductById(productId: any): Promise<any> {
        let product = await element(by.css("tr[id^=\"product_" + productId + "\"]"));
        return await expect(product.isDisplayed()).toBeTruthy();
    }

    /**
     * This verifies that the unit price matches total price of a product,
     * and that the discount displayed is correct (if there is one).
     *
     * @param {*} productId The product ID of the product to be verified
     * @returns {Promise<any>} Returns a promise when the products price(s) is verified
     * @memberof SummaryPage
     */
    async verifyProductPriceById(productId: any): Promise<any> {
        let prices; // array for all price text in 'Unit Price' column
        let unitPriceText = await element(by.css("span[id^=\"product_price_" + productId + "\"]")).getText();
        let totalPriceText = await element(by.css("span[id^=\"total_product_price_" + productId + "\"]")).getText();

        prices = unitPriceText.split(" ");

        // remove special characters from text
        for (let index = 0; index < prices.length; index++) {
            prices[index] = prices[index].replace(/[$%-]/g, "");
        }

        // convert unit and total prices to numbers
        let unitPrice = Number(prices[0]);
        let totalPrice = Number(totalPriceText.replace(/[$ ]/, ""));

        // if product has a discount
        if (prices.length > 1) {
            let oldPrice = Number(prices[4]); // TODO: redo hardcoded indexes to something that won't break so easily
            let newPrice = Number(prices[0]);
            let discount = Number(prices[2] / 100);
            let calculatedPrice = oldPrice - (oldPrice * discount);
            calculatedPrice = Math.round(calculatedPrice * 100) / 100;

            // verify the discount displayed is correct
            await expect(calculatedPrice).toEqual(newPrice, newPrice + " is expected to equal " + calculatedPrice);
        }
        // verify the displayed unit and total price are the same
        return await expect(unitPrice).toEqual(totalPrice, totalPrice + " is expected to equal " + unitPrice);
    }

    /**
     * This verifies the total products price, total before tax, and the grand total
     * of all products in the user's cart.
     *
     * @returns {Promise<any>} Returns a promise when all totals have been verified
     * @memberof SummaryPage
     */
    async verifyTotalPrice(): Promise<any> {
        // TODO: refactor text variables to properties in the SummaryPage class so that they can be reused, same as DressPage
        // get all products and summary amounts from the page
        let allProductElements = await element.all(by.css("span[id^=\"total_product_price_\"]"));
        let totalProductText = await element(by.css("td[id^=\"total_product\"]")).getText();
        let totalShippingText = await element(by.css("td[id^=\"total_shipping\"]")).getText();
        let totalBeforeTaxText = await element(by.css("td[id^=\"total_price_without_tax\"]")).getText();
        let totalTaxText = await element(by.css("td[id^=\"total_tax\"]")).getText();
        let grandTotalText = await element(by.css("span[id^=\"total_price\"]")).getText();

        // convert summary amounts to numbers
        let totalProduct = Number(totalProductText.replace(/[$ ]/, ""));
        let totalShipping = Number(totalShippingText.replace(/[$ ]/, ""));
        let totalBeforeTax = Number(totalBeforeTaxText.replace(/[$ ]/, ""));
        let totalTax = Number(totalTaxText.replace(/[$ ]/, ""));
        let displayedGrandTotal = Number(grandTotalText.replace(/[$ ]/, ""));

        let calculatedTotalProduct = 0;
        let calculatedTotalBeforeTax = 0;
        let calculatedGrandTotal = 0;

        // add up the cost of each product
        for (let index = 0; index < allProductElements.length; index++) {
            const productString = await allProductElements[index].getText();
            let productPrice = Number(productString.replace(/[$ ]/, ""));
            calculatedTotalProduct += productPrice;
        }

        // calculate the totals
        calculatedTotalProduct = Math.round(calculatedTotalProduct * 100) / 100;
        calculatedTotalBeforeTax = calculatedTotalProduct + totalShipping;
        calculatedGrandTotal = calculatedTotalBeforeTax + totalTax;

        // verify the calculated totals match what is displayed to the user
        await expect(calculatedTotalProduct).toEqual(totalProduct, calculatedTotalProduct + " is expected to equal " + totalProduct);
        await expect(calculatedTotalBeforeTax).toEqual(totalBeforeTax, calculatedTotalBeforeTax + " is expected to equal " + totalBeforeTax);
        return await expect(calculatedGrandTotal).toEqual(displayedGrandTotal, calculatedGrandTotal + " is expected to equal " + displayedGrandTotal);
    }
}