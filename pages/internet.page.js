class Internet {
  get pageHeader() {
    return $("h1.heading");
  }

  get subHeading() {
    return $("h2");
  }

  get h3ItemHeader() {
    return $("h3");
  }

  get pageFooter() {
    return $("#page-footer");
  }

  get parent() {
    return $("ul");
  }

  get childElements() {
    return this.parent.$$("li");
  }

  get firstLink() {
    return $("ul li:nth-child(1) a");
  }

  link(index) {
    return $(`ul li:nth-child(${index}) a`);
  }

  specificChildElement(index) {
    return this.parent.$(`li:nth-child(${index})`);
  }

  getLiText() {
    this.childElements.filter((element) => {
      console.log(element.getText());
    });
  }

  getSpecificElementText(index) {
    this.specificChildElement(index).waitForDisplayed();
    return this.specificChildElement(index).getText();
  }

  getCheckboxes(index) {
    console.log(index);
    return $(`#checkboxes input:nth-child(${index})`);
  }

  clickOnLink() {
    if (this.firstLink.isDisplayed() === true) {
      this.firstLink.click();
    }
    this.h3ItemHeader.waitForDisplayed();
    browser.pause(2000);
  }

  clickLink(index) {
    this.link(index).waitForDisplayed();
    this.link(index).click();
    browser.pause(2000);
  }

  clickCheckbox(index) {
    this.getCheckboxes(index).waitForDisplayed();
    this.getCheckboxes(index).click();
    browser.pause(2000);
  }
}

module.exports = new Internet();
