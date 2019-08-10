import { AutomationPracticeHomepage } from '../page-objects/homePage';
import { browser } from 'protractor';

describe('automation practice homepage', function () {
    beforeEach(async function (): Promise<any> {
        await browser.waitForAngularEnabled(false); // non-angular site
    });

    it('should navigate to the homepage', async function (): Promise<any> {
        let automationPracticeHomepage = new AutomationPracticeHomepage();
        await automationPracticeHomepage.get();
    });
});
