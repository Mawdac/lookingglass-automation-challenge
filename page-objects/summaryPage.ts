import { browser, element, by, ElementFinder } from 'protractor';

export class SummaryPage {
    private async getProductById(productId: any): Promise<ElementFinder> {
        return await element(by.css("tr[id^=\"product_" + productId + "\""));
    }

    async verifyProductById(productId: any): Promise<any> {
        var product = await this.getProductById(productId);
        return await expect(product.isDisplayed()).toBeTruthy();
    }

    async verifyProductPriceById(productId: any): Promise<any> {
        let price, discount, discountPrice, calculatedPrice;
        var product = await this.getProductById(productId);
        // discountPrice = await element(product).element(by.css(".special-price"));
        // await element(product).element(by.css(".special-price")).isDisplayed().then(async function (discountedProduct) {
        //     if (discountedProduct) {
        price = element(product).element(by.css(".old-price")).getText();
        discount = element(product).element(by.css(".price-percent-reduction")).getText();
        discountPrice = element(product).element(by.css(".price")).getText();

        price = Number(price.replace("$", ""));
        discount = discount.replace("%", "");
        discount = Number(discount.replace("-", "")) * (1 / 100);
        discountPrice = Number(discount.replace("$", ""));

        calculatedPrice = price - (price * discount);

        // console.log(price);
        // console.log(discount);
        // console.log(discountPrice);
        // console.log(calculatedPrice);

        return await expect(calculatedPrice).toEqual(discountPrice);
        // } else {
        //     return await expect(element(product).element(by.css(".cart_unit")).element(by.css("price")).isDisplayed).toBeTruthy();
        // }
        // });
        // return;
    }
}