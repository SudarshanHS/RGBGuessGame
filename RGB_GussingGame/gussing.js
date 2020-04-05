var colors = [];
var pickedColor = null


var squares = document.querySelectorAll(".square")
var spColorDisplay = document.querySelector("#spColorDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var btnReset = document.querySelector("#btnReset")
var btnEasy = document.querySelector("#btnEasy")
var btnHard = document.querySelector("#btnHard")

var isHard = true

init(isHard, true)




function init(isHard, toSetListner) {

    if (isHard) {
        colors = generateRandomColor(6)
    } else {
        colors = generateRandomColor(3)
    }

    pickedColor = pickColor();
    spColorDisplay.textContent = pickedColor

    setColorsToSquers(toSetListner)

    messageDisplay.textContent = ""

    h1.style.backgroundColor = "steelblue"

    btnReset.textContent = "New Colors"
}


btnEasy.addEventListener("click", function() {

    isHard = false
    btnEasy.classList.add("selected")
    btnHard.classList.remove("selected")
    colors = generateRandomColor(3)

    init(isHard, true)
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {

        } else {
            squares[i].style.display = "none";
        }
    }

});


btnHard.addEventListener("click", function() {

    isHard = true

    btnHard.classList.add("selected")
    btnEasy.classList.remove("selected")
    init(isHard, false)

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.display = "block";
    }

});



function setColorsToSquers(toSetListner) {

    for (var i = 0; i < squares.length; i++) {

        if (colors[i]) {
            var selectedTag = squares[i];
            selectedTag.style.backgroundColor = colors[i];
        }

        if (toSetListner) {
            selectedTag.addEventListener("click", function() {
                var clicked = this.style.backgroundColor;

                if (clicked === pickedColor) {
                    messageDisplay.textContent = "Correct"
                    changeColor(pickedColor)

                    btnReset.textContent = "Try Again?"
                    h1.style.backgroundColor = pickedColor
                } else {

                    this.style.backgroundColor = "stellblue";
                    messageDisplay.textContent = "Try Again"
                }
            });
        }
    }


}



btnReset.addEventListener("click", function() {

    init(isHard, false)

});

function changeColor(color) {

    for (var i = 0; i < squares.length; i++) {
        var selectedTag = squares[i];
        selectedTag.style.backgroundColor = color

    }

}


function pickColor() {

    var randNum = Math.floor((Math.random() * (colors.length - 1)) + 1);

    console.log("Rand num Is >>" + randNum)

    var color = colors[randNum]
    console.log("Rand color is  >>" + color)

    return color
}


function generateRandomColor(maxNumOfColor) {

    var arr = []


    for (var i = 0; i < maxNumOfColor; i++) {
        arr.push(randomColor())
    }


    return arr;

}


function randomColor() {

    var r = Math.floor(Math.random() * 256)

    var g = Math.floor(Math.random() * 256)

    var b = Math.floor(Math.random() * 256)


    return "rgb(" + r + ", " + g + ", " + b + ")"

}