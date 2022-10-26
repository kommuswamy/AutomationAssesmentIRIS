const CommonPage = require('../pageobjects/CommonPage');
const LoginPage = require('../pageobjects/loginPage');

describe('Assesment code', () => {
    it('Navigate to https://osa-web.t-cg.co.uk', async () => {
        await LoginPage.open("https://osa-web.t-cg.co.uk");
    });
    it('Verify Our school app Home Page', async () => {
        await LoginPage.VerifyHomePage()
    })
    it('Search with keyWord', async () => {
        await $("input#main").setValue("B16 8PE");
        await $("#searchPostcodeButton").click();
        await CommonPage.WaitForElementToPresent("li:nth-child(1)")
    })
    it('Scroll and Click on Contact Group which is Active', async () => {
        const contactGroup = await $("//li[contains(@class,'success')]//*[normalize-space(text())='Contact Group']")
        await contactGroup.scrollIntoView();
        await contactGroup.click();
    })
    it('Verify News Page Bydefault URL', async () => {
        await LoginPage.verifyPageURL("https://osa-web.t-cg.co.uk/news", 25000);
        const actualURL = await browser.getUrl();
        await CommonPage.expectWithReporting("Verify URL", "https://osa-web.t-cg.co.uk/news", actualURL);
    })
    it('Verify News Option Enabled', async () => {
        await CommonPage.WaitForElementToPresent('[data-testid="NewsCurrentPageTitle"]');
        let currentOption = await $('[data-testid="NewsCurrentPageTitle"]').getText();
        currentOption = currentOption.replace(/\n/g, " ");
        await CommonPage.expectWithReporting("by default News Option selected", "Current Page: News", currentOption)
    })
    it('Verify News Option Should Show only one for Nov', async () => {
        const nrOfElements = await $$("//li//ol");
        const countOfElements = nrOfElements.length;
        await CommonPage.expectWithReporting("only one News Should Show", 1, countOfElements);
    })
    it(' Navigate to https://osa-web.t-cg.co.uk/qatest', async () => {
        await browser.url("https://osa-web.t-cg.co.uk/qatest");
    })
    // No News Appear beacause of invalid deep link URL
    it("Verify qatest url opens without any news", async () => {
        const nrOfElements = await $$("//li//ol");
        const countOfElements = nrOfElements.length;
        await CommonPage.expectWithReporting("only one News Should Show", 0, countOfElements);
    })
    // if correct it the deep link url it opens the News Page
    it('Navigate to https://osa-web.t-cg.co.uk/news', async () => {
        await browser.url("https://osa-web.t-cg.co.uk/news");
    })
    it('Verify News Option Enabled with deep link URL', async () => {
        await CommonPage.WaitForElementToPresent('[data-testid="NewsCurrentPageTitle"]');
        let currentOption = await $('[data-testid="NewsCurrentPageTitle"]').getText();
        currentOption = currentOption.replace(/\n/g, " ");
        await CommonPage.expectWithReporting("by default News Option selected", "Current Page: News", currentOption)
    })
    it('Verify News Option Should Show only one for Nov with Deep link URL', async () => {
        const nrOfElements = await $$("//li//ol");
        const countOfElements = nrOfElements.length;
        await CommonPage.expectWithReporting("only one News Should Show", 1, countOfElements);
    })
});


