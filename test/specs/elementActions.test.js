internetPage = require("../../pages/internet.page");

describe("Test element actions", () => {
  it("Should click element", () => {
    browser.url("/");
    internetPage.clickOnLink();
    expect(browser.getUrl()).equals(
      "https://the-internet.herokuapp.com/abtest"
    );
  });

  it("Should get Text", () => {
    browser.url("/");
    expect(internetPage.getSpecificElementText(1)).equals("A/B Testing");
  });

  it("Should click checkbox", () => {
    internetPage.clickLink(6);
    internetPage.clickCheckbox(1);
    expect(internetPage.getCheckboxes(1).isSelected()).equals(true);
  });

  it("Should uncheck checkbox", () => {
    internetPage.clickCheckbox(1);
    expect(internetPage.getCheckboxes(1).isSelected()).equals(false);
  });
});
