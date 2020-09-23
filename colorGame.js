var numSquares = 6;
var colors = [];
var pickedColor;

var pickedColorDisplay = document.querySelector("#pickedColor")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode")


init();

function init(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }       
            reset();
        });
    }

    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            if(this.style.backgroundColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "PLAY AGAIN?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }

    reset();
}



resetButton.addEventListener("click", function(){
    reset();  
});



function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num){
    var arr = []

    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")" 

}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    pickedColorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
        
    }
    resetButton.textContent = "NEW COLORS"
    messageDisplay.textContent = ""
}