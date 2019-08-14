import { browser, element, by, ElementFinder } from 'protractor';

export class SummaryPage {
    async verifyProductById(productId: any): Promise<any> {
        let product = await element(by.css("tr[id^=\"product_" + productId + "\"]"));
        return await expect(product.isDisplayed()).toBeTruthy();
    }

    async verifyProductPriceById(productId: any): Promise<any> {
        let priceText, prices;
        priceText = await element(by.css("span[id^=\"product_price_" + productId + "\"]")).getText();
        prices = priceText.split(" ");

        if (prices.length > 1) {
            for (let index = 0; index < prices.length; index++) {
                prices[index] = prices[index].replace(/[$%-]/g, "");
            }
            let oldPrice = Number(prices[4]);
            let newPrice = Number(prices[0]);
            let discount = Number(prices[2] / 100);
            let calculatedPrice = oldPrice - (oldPrice * discount);
            calculatedPrice = Math.round(calculatedPrice * 100) / 100;

            return await expect(newPrice).toEqual(calculatedPrice);
        } else {
            return await expect(priceText).toBeTruthy();
        }
    }

    async verifyTotalPrice(): Promise<any> {
        let totalProductElements = element.all(by.css("span[id^=\"total_product_price_\"]"));
        let totalProductPrice = element(by.css("td[id^=\"total_product\"])");
    }
}