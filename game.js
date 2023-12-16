let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern=[];

// sounds

let greenSound = new Audio("./sounds/green.mp3");
let redSound = new Audio("./sounds/red.mp3");
let yellowSound = new Audio("./sounds/yellow.mp3");
let blueSound = new Audio("./sounds/blue.mp3");

let wrong = new Audio("./sounds/wrong.mp3");


// function that take a sound and play it 
function playSound(sound) {
    switch (sound) {
      case "green":
        greenSound.play();
        break;
      case "red":
        redSound.play();
        break;
      case "yellow":
        yellowSound.play();
        break;
      case "blue":
        blueSound.play();
        break;
    }
  }

  


function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

let randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

//animation
$("#" + gamePattern).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);









// add events to buttons , on colick play sound 
$(".btn").on("click", function (e) {
    // on click give to playSound function specfice sound and play it

    let snd = e.target.id;
    playSound(snd);


});




// on clikc can a handler 
$(".btn").on("click",function(e){
    hanleButtons(e);

})

function hanleButtons(element){
    let userChosenColour = element.target.id ;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

}