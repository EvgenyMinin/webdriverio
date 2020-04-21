internetPage = require("../../pages/internet.page");

describe("WaitUntil", () => {
  it("should wait until the button text changes to add", () => {
    browser.url(`${browser.options.baseUrl}dynamic_controls`);
    internetPage.clickPageButton();
    browser.waitUntil(
      () => {
        browser.pause(2000);
        return internetPage.pageButton.getText() === "Add";
      },
      6000,
      "Expect button text to change"
    );
    assert.equal("Add", internetPage.pageButton.getText());
  });

  it("should wait until the button text changes to remove", () => {
    internetPage.clickPageButton();
    browser.waitUntil(
      () => {
        browser.pause(2000);
        return internetPage.pageButton.getText() === "Remove";
      },
      6000,
      "Expect button text to change"
    );
    assert.equal("Remove", internetPage.pageButton.getText());
  });
});
