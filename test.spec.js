describe('automation practice homepage', function () {
    beforeEach(function () {
        browser.waitForAngularEnabled(false); // non-angular site
    });

    it('should navigate to the homepage', function () {
        browser.get('http://automationpractice.com/');
    });
});
