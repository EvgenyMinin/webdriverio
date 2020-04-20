internetPage = require("../../pages/internet.page");

describe("JS Alerts", () => {
  it("Should get text of alert", () => {
    browser.url(`${browser.options.baseUrl}javascript_alerts`);
    internetPage.clickAlertButton(1);
    assert.equal("I am a JS Alert", browser.getAlertText());
  });
});
