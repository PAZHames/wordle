var height = 6; //number of guesses
var width = 5; //length of word

var row=0; //attempt no
var column=0; //current letter for attempt

var gameOver=false;

var word="ENTRY";

window.onload = function() {
    initialise();
}

function initialise() {

    // create board

    for (r=0; r<height; r++) {
        for (c=0; c<width; c++) {
            let tile=document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "P";
            document.getElementById("board").appendChild(tile);
        }
    }
}