internetPage = require("../../pages/internet.page");

describe("Drag and Drop", () => {
  it("Should drag and drop", () => {
    browser.url("https://crossbrowsertesting.github.io/drag-and-drop.html");
    internetPage.dragDraggableToDroppable();
    assert.equal("Dropped!", internetPage.droppableParagraph.getText());
  });
});
