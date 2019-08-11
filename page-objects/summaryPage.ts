import { browser, element, by } from 'protractor';

export class SummaryPage {
    async verifyProductById(productId: any): Promise<any> {
        var product = element(by.css("tr[id^=\"product_" + productId + "\""));
        return await expect(product.isDisplayed()).toBeTruthy();
    }

    async checkProductPrice(product: Element): Promise<boolean> {
        let price, discount, discountPrice, calculatedPrice, isCorrect = false;
        await element(product).element(by.css(".cart_unit")).element(by.css(".special-price")).isDisplayed().then( function (discountedProduct) {
            if (discountedProduct) {
                price = element(product).element(by.css(".cart_unit")).element(by.css(".old-price")).getText();
                discount = element(product).element(by.css(".cart_unit")).element(by.css(".price-percent-reduction")).getText();
                discountPrice = element(product).element(by.css(".cart_unit")).element(by.css(".price")).getText();
                
                price = Number(price.replace("$", ""));
                discount = discount.replace("%", "");
                discount = Number(discount.replace("-", "")) * (1/100);
                discountPrice = Number(discount.replace("$", ""));

                calculatedPrice = price - (price * discount);

                console.log(price);
                console.log(discount);
                console.log(discountPrice);
                console.log(calculatedPrice);

                if (calculatedPrice == discountPrice) {
                    isCorrect = true;
                }
            } else {
                isCorrect = true;
            }
        });
        return isCorrect;
    }
}