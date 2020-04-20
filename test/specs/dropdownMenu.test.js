internetPage = require("../../pages/internet.page");

describe("Dropdown Menu", () => {
  it("Should select option 1", () => {
    browser.url(`${browser.options.baseUrl}dropdown`);
    internetPage.clickDropdownMenu();
    internetPage.clickDropdownMenuOption1();
    assert.equal(true, internetPage.dropdownMenuOption1.isSelected());
  });

  it("Should select option 2", () => {
    browser.url(`${browser.options.baseUrl}dropdown`);
    internetPage.clickDropdownMenu();
    internetPage.clickDropdownMenuOption2();
    assert.equal(true, internetPage.dropdownMenuOption2.isSelected());
  });
});
