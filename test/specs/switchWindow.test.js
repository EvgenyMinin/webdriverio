internetPage = require("../../pages/internet.page");

describe("Switch Window", () => {
  it("Should switch to the next window", () => {
    browser.url(`${browser.options.baseUrl}windows`);
    internetPage.clickHereLink();
    browser.switchWindow(`${browser.options.baseUrl}windows/new`);
    assert.equal(true, internetPage.h3ItemHeader.isExisting());
    assert.equal(true, internetPage.h3ItemHeader.isDisplayed());
    assert.equal("New Window", internetPage.h3ItemHeader.getText());
    browser.pause(3000);
  });
});
