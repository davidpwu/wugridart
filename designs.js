// Select color input
var chosenColor = function() 
{
    return $("#colorPicker")[0].value;
};

// Select size input
var numRows = function() 
{
    return Number($("#input-height")[0].value);
};
var numCols = function() 
{
    return Number($("#input-width")[0].value);
};

// Makes grid
function makeGrid() 
{
    if(numRows() >= Number($("#input-height")[0].max))
    {
        $("#input-height")[0].value = $("#input-height")[0].max;
    }
    if(numCols() >=  Number($("#input-width")[0].max))
    {
        $("#input-width")[0].value = $("#input-width")[0].max;
    }
    var myTable = $("#pixel-canvas");
    myTable.empty();
    for(var i = 0; i < numRows(); i++)
    {
        var row = $("<tr></tr>");
        myTable.append(row);
        for(var j = 0; j < numCols(); j++)
        {
            var col = $("<td></td>");
            row.append(col);           
        }
    }
};

// When size is submitted by the user, call makeGrid()
var pushButton = $("#push-button");
pushButton.on("click",function(evt)
{
    makeGrid();
});

// Paint
var box = $("table");
box.on("mouseover mousedown",function(evt)
{evt.preventDefault();
    if(evt.which === 1)
    {
        var myColor = chosenColor();
        $(evt.target).css("background-color",chosenColor());
    }
    if(evt.which === 3)
    {
        $(evt.target).css("background-color","white");
    }
});

// Disable right click menu within grid
box.on("contextmenu",function(){
    return false;
});