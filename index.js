
// triggering sound using mouse click

var numberOfDrums = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrums; i++){
    document.querySelectorAll("button")[i].addEventListener("click", clickHandler);
}

//triggering sound using keyboard keys
document.addEventListener("keydown", function(Event){keyPressHandler(Event.key);});

function clickHandler(){
    var drumLetter = this.innerHTML;
    pressAnimation(drumLetter);     // calling the animation on the clicked button and passing the letter

    switch (drumLetter) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
            
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;        
    
        default:
            break;
    }
}

function keyPressHandler(key){
    pressAnimation(key);  //calling animation on the pressed button and passing the key pressed on the keyboars
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
            
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;        
    
        default: console.log(key);
            break;
    }
}

//turning the animation on an off
function pressAnimation(key){
    var activeButton = document.querySelector("." + key);    //getting the exact key presses 
    activeButton.classList.add("pressed");                  //applying the animation
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);                                                //removint the animation after a delay of 1 sec   
}
