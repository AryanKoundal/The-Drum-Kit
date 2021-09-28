var buttons = document.querySelectorAll(".drum"); // string of all buttons


// selecing each button and adding listener to each button
for( let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event){
  // var eventKey = event.key;
    console.log("clicked");
  makeSound(event.key);
  buttonAnimation(event.key);
});
// defining the function used in event listener

function makeSound(key){
  switch (key) {
    case "w":
      var sound1 = new Audio('sounds/tom-1.mp3');
      sound1.play();
      break;
    case "a":
      var sound2 = new Audio('sounds/tom-2.mp3');
      sound2.play();
      break;
    case "s":
      var sound3 = new Audio('sounds/tom-3.mp3');
      sound3.play();
      break;
    case "d":
      var sound4 = new Audio('sounds/tom-4.mp3');
      sound4.play();
      break;
    case "j":
      var sound5 = new Audio('sounds/snare.mp3');
      sound5.play();
      break;
    case "k":
      var sound6 = new Audio('sounds/crash.mp3');
      sound6.play();
      break;
    case "l":
      var sound7 = new Audio('sounds/kick-bass.mp3');
      sound7.play();
      break;
    default: console.log(this.innerHTML);
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },
  100);
}


// heading wali game
//text glows while clicked
//a sound played while text is clicked
//all the keys glow when text plays
var heading = document.getElementById("title");
heading.addEventListener("click",titleIsClicked);

function titleIsClicked(){

  var sound8 = new Audio("sounds/phIntro.mp3");
  // var sound8 = new Audio("sounds/Joke.mp3");
  sound8.play();


  heading.classList.add("titleclicked");
  setTimeout(function(){
    heading.classList.remove("titleclicked");
  },2400);


  var allButtons = document.getElementsByClassName("drum");
  for( let i = 0; i < allButtons.length; i++){
    allButtons[i].classList.add("pressed");
    setTimeout(function(){
      allButtons[i].classList.remove("pressed");
    },
    2400);
  }

}
