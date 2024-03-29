var numberOfSquares = 6;
var colors = generateRandomColors (numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector ("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById ("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener ("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display ="none";
        }
    }
})

hardBtn.addEventListener ("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display ="block";
    }
})

reset.addEventListener ("click",function (){
    colors = generateRandomColors(numberOfSquares);

    easyBtn.removeAttribute("disabled", "disabled");
    hardBtn.removeAttribute("disabled", "disabled");

    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
})

colorDisplay.textContent = pickedColor

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            easyBtn.setAttribute("disabled", "disabled");
            hardBtn.setAttribute("disabled", "disabled");
            resetButton.textContent = "Play Again";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else {
            messageDisplay.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    })
}


function changeColor (color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors (num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var result =  "rgb(" + r + ", " + g + ", " + b + ")";
    return result;
}