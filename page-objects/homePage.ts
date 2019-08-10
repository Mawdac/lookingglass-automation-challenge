// import {browser, element, by, By, $, $$, ExpectedConditions}
import { browser, element, by } from 'protractor';

export class AutomationPracticeHomepage {

    async get(): Promise<any> {
        return await browser.get('http://automationpractice.com/');
    }
}
