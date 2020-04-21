internetPage = require("../../pages/internet.page");

describe("Wait For Enabled", () => {
  it("Should wait for the input field to be enabled", () => {
    browser.url(`${browser.options.baseUrl}dynamic_controls`);
    internetPage.clickEnableButton();
    internetPage.inputEnabledField.waitForEnabled(4000);
    assert.equal(true, internetPage.inputEnabledField.isEnabled());
  });

  it("Should wait for the input field to be disabled", () => {
    internetPage.clickEnableButton();
    internetPage.inputEnabledField.waitForEnabled(4000, true);
    assert.equal(false, internetPage.inputEnabledField.isEnabled());
  });
});
