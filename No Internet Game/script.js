//the ".getElementById basically gets an id (sort of like pointer) of the divs created."
//This converts them into the "DOM" enviroment
var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){ //checks if "animate" class is in CSS
        character.classList.add("animate"); 
        //in CSS, this adds the 'animate' class to the character
    }
    setTimeout(function(){
        character.classList.remove("animate"); //removes the animate function after 500 ms (length of jump animation)
    },500);
}
var checkDead = setInterval(function(){ //checks every 10 ms
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); //gets the value for 'top' from css
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); //gets value for left from css
    //since returns in px, need to use parseInt to convert to just an int
    //window is a global object that represents the whole window page
    ///getComputedStyle returns an object with all the css elements
    //getpropertyvalue returns a specific properts


    if(characterTop >= 130 && blockLeft < 20 && blockLeft > 0){ //if the character and block touch
        block.style.animation = "none"; //changes the css animation for the block to none
        block.style.display = "none"; //makes invisible
        //.style returns a "CSSStyleDeclaration Object" - basically allows manipulation of css
        alert("u lose."); //allerts user
    }
},10);