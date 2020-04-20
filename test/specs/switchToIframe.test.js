internetPage = require("../../pages/internet.page");

describe("Switch to Iframe", () => {
  it("Should switch to iframe", () => {
    browser.url(`${browser.options.baseUrl}iframe`);
    internetPage.h3ItemHeader.waitForDisplayed();
    internetPage.iframe.waitForDisplayed();
    browser.switchToFrame(internetPage.iframe);
    internetPage.sendTextToBody("Hello");
    assert.equal("Hello", internetPage.iframeBody.getText());
    browser.pause(5000);
  });
});
