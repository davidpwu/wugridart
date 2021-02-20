// Select color input
const chosenColor = function() { 
  return $("#colorPicker")[0].value; 
}

// Select size input
const numRows = function() { 
  return Number($("#input-height")[0].value); 
}
const numCols = function() { 
  return Number($("#input-width")[0].value); 
}

// Makes grid
const makeGrid = function() {
  // Limit grid size
  if (numRows() >= Number($("#input-height")[0].max)) {
    $("#input-height")[0].value = $("#input-height")[0].max;
  }
  if (numCols() >=  Number($("#input-width")[0].max)) {
    $("#input-width")[0].value = $("#input-width")[0].max;
  }

  // Fill in grid
  const pixelCanvas = $("#pixel-canvas");

  // Create pixel canvas table
  pixelCanvas.empty();
  for (let i = 0; i < numRows(); i++) {
    const row = pixelCanvas[0].insertRow(i);
    for (let j = 0; j < numCols(); j++) {
      const cell = row.insertCell(j);
    }
  }

  // Paint
  pixelCanvas.on("mouseover mousedown", (evt) => {
    evt.preventDefault();
    // Paint with chosen color with left click
    if (evt.which === 1) {
      $(evt.target).css("background-color", chosenColor());
    }
    // Remove paint with right click
    if (evt.which === 3) {
      $(evt.target).css("background-color", "white");
    }
  });

  // Disable right click menu within grid
  pixelCanvas.on("contextmenu", () => {
    return false;
  });
}

// When size is submitted by the user, call makeGrid()
const pushButton = $("#push-button");
pushButton.on("click", (evt) => {
  makeGrid();
});
