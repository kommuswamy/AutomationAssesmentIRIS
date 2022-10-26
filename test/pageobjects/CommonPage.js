const allureReport = require('@wdio/allure-reporter').default;
class CommonPage{
    /** 
     * Below function is to load Initial page load 
     *@param {String}  eleLocator -- element xpath or CSS Selector  
    */
     async WaitForElementToPresent(eleLocator) {
        const elem = await $(eleLocator)
        await elem.waitForExist({
            timeout: 50000,
            timeoutMsg: 'expected selector ' + eleLocator + ' not loaded after 50000' 
        });
    }
    /**
     * 
     * @param {*} description 
     * @param {*} expectedText 
     * @param {*} actualText 
     */
    async expectWithReporting(description, expectedText, actualText) {
        if(expectedText === actualText){
            allureReport.startStep(`${description}`);
            allureReport.addStep("expect '" + expectedText + "' toBe '" + actualText + "'");
            allureReport.endStep("passed");
            browser.takeScreenshot()
        }
        else{
            allureReport.startStep(`${description}`);
            allureReport.addStep("expect '" + expectedText + "' toBe '" + actualText + "'");
            allureReport.endStep("failed");
            browser.takeScreenshot()
        }
        expect(expectedText).toBe(actualText)
    }
}
module.exports = new CommonPage();