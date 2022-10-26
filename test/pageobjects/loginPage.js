const CommonPage = require("./CommonPage");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {

    /**
     * overwrite specific options to adapt it to page object
     */
    async open(URL) {
        await browser.url(URL);
        await this.verifyPageURL(URL+'/',10000);
        const actualURL = await browser.getUrl()
        await CommonPage.expectWithReporting("Verify URL", URL+'/',actualURL)
    }
    /**
     * Verify navigated URL
     * @param {String} URL : Url of the Application
     */
    async verifyPageURL(URL, time) {
        await browser.waitUntil(
            async () => (await browser.getUrl()) === URL,
            {
                timeout: time,
                timeoutMsg: 'page not loaded after ' + time + ' Secs'+browser.getUrl()
            }
        );
    }
    /**
     * Verify Home Page Component
     */
    async VerifyHomePage() {
        await CommonPage.WaitForElementToPresent("//h2");
        const header = await $("//h2").getText();
        const schoolSearchHeader = await $("//h1").getText();
        await CommonPage.expectWithReporting("Verify Header of the page", "Welcome to OurSchoolsApp", header)
        await CommonPage.expectWithReporting("Verify Body Header", "School Search", schoolSearchHeader)
    }
}

module.exports = new LoginPage();
