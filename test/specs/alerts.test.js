internetPage = require("../../pages/internet.page");

describe("JS Alerts", () => {
  it("Should get text of alert", () => {
    browser.url(`${browser.options.baseUrl}javascript_alerts`);
    internetPage.clickAlertButton(1);
    assert.equal("I am a JS Alert", browser.getAlertText());
  });

  it("Should accept alert", () => {
    browser.acceptAlert();
    assert.equal(
      "You successfuly clicked an alert",
      internetPage.getResultText()
    );
  });

  it("Should dismiss alert", () => {
    internetPage.clickAlertButton(2);
    browser.dismissAlert();
    assert.equal("You clicked: Cancel", internetPage.getResultText());
  });

  it("Should accept alert", () => {
    internetPage.clickAlertButton(2);
    browser.acceptAlert();
    assert.equal("You clicked: Ok", internetPage.getResultText());
    browser.pause(1000);
  });
});
