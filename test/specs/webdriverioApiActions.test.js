internetPage = require("../../pages/internet.page");

describe("WebdriverIO API Actions", () => {
  it("Should hover on figure 1", () => {
    browser.url(`${browser.options.baseUrl}hovers`);
    internetPage.hoverOnFigure(3);
    assert.equal("name: user1", internetPage.getFigureDetailsText(3));
    browser.pause(1000);
  });

  it("Should hover on figure 2", () => {
    browser.url(`${browser.options.baseUrl}hovers`);
    internetPage.hoverOnFigure(4);
    assert.equal("name: user2", internetPage.getFigureDetailsText(4));
    browser.pause(1000);
  });

  it("Should hover on figure 3", () => {
    browser.url(`${browser.options.baseUrl}hovers`);
    internetPage.hoverOnFigure(5);
    assert.equal("name: user3", internetPage.getFigureDetailsText(5));
    browser.pause(1000);
  });

  it("Should send keyboard value", () => {
    browser.url(`${browser.options.baseUrl}key_presses`);
    internetPage.clickInputTarget();
    internetPage.sendKeysToTarget("H");
    assert.equal("You entered: H", internetPage.getResultText());
    internetPage.sendKeysToTarget("e");
    assert.equal("You entered: E", internetPage.getResultText());
    internetPage.sendKeysToTarget("l");
    assert.equal("You entered: L", internetPage.getResultText());
    internetPage.sendKeysToTarget("l");
    assert.equal("You entered: L", internetPage.getResultText());
    internetPage.sendKeysToTarget("o");
    assert.equal("You entered: O", internetPage.getResultText());
  });

  it("Should send keyboard value Tab", () => {
    browser.url(`${browser.options.baseUrl}key_presses`);
    internetPage.clickInputTarget();
    internetPage.sendKeysToTarget("Tab");
    assert.equal("You entered: TAB", internetPage.getResultText());
  });

  it("Should send keyboard value Shift", () => {
    browser.url(`${browser.options.baseUrl}key_presses`);
    internetPage.clickInputTarget();
    internetPage.sendKeysToTarget("Shift");
    assert.equal("You entered: SHIFT", internetPage.getResultText());
  });
});
