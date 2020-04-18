const internetPage = require("../../pages/internet.page");

describe("Interacting with elements", () => {
  it("Get text for element", () => {
    browser.url("/");
    let text = $(".heading").getText();
    console.log(text);
    let footer = $("#page-footer").getText();
    console.log("This is footer", footer);
    internetPage.getLiText();
    internetPage.getSpecificElementText(3);
  });

  it("Is footer displayed", () => {
    console.log(internetPage.pageFooter.isDisplayed());
  });
  it("Does the header exist?", () => {
    console.log(internetPage.pageHeader.isExisting());
  });
  it("Is footer in viewport?", () => {
    console.log(internetPage.pageFooter.isDisplayedInViewport());
  });
  it("Click Element", () => {
    internetPage.clickOnLink();
  });
});
