internetPage = require("../../pages/internet.page");

describe("Scroll to Element", () => {
  it("Should scroll to the Footer", () => {
    browser.url("/");
    internetPage.pageFooter.scrollIntoView();
    assert.equal(true, internetPage.pageFooter.isDisplayedInViewport());
    browser.pause(4000);
  });
});
