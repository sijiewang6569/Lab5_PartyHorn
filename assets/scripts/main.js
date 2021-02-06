// main.js

// TODO
var honkBtn = document.getElementById("honk-btn");
honkBtn.type = "button"; 

let volumeSlider = document.getElementById('volume-slider');
let volumeNumber = document.getElementById('volume-number');
let volumeImage = document.getElementById('volume-image');

//Input field that serves as the textual indicator of sound level
volumeNumber.addEventListener('input', changeByNumber);
function changeByNumber () {
    honkBtn.disabled = false;
    let volume = volumeNumber.value / 100;
    document.getElementById("horn-sound").volume = volume;
    volumeSlider.value = volumeNumber.value;
    // volume-level-0: 0
    if(volumeSlider.value == 0){
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        honkBtn.disabled = true; // disable the button if volume is muted
   }
   // volume-level-1: 1-33
   else if(volumeSlider.value < 34){
       volumeImage.src = "./assets/media/icons/volume-level-1.svg";
   }
   // volume-level-2: 34-66  
   else if(volumeSlider.value < 67){
       volumeImage.src = "./assets/media/icons/volume-level-2.svg";
   }
   // volume-level-3: 67-100
   else{
       volumeImage.src = "./assets/media/icons/volume-level-3.svg";
   }
};

// Slider that serves visual controller for sound level
volumeSlider.addEventListener('input', changeBySlider);
function changeBySlider () {
    honkBtn.disabled = false;
    let volume = volumeSlider.value / 100;
    document.getElementById("horn-sound").volume = volume; 
    volumeNumber.value = volumeSlider.value; 
    // volume-level-0: 0
    if(volumeSlider.value == 0){
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        honkBtn.disabled = true; // disable the button if volume is muted
    }
    // volume-level-1: 1-33
    else if(volumeSlider.value < 34){
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    }  
    // volume-level-2: 34-66
    else if(volumeSlider.value < 67){
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    }
    // volume-level-3: 67-100
    else{
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    }
};


var hornSound = document.getElementById("horn-sound")
var soundImage = document.getElementById("sound-image")

var airHorn = document.getElementById("radio-air-horn");
airHorn.addEventListener('click', changeAirHorn);
function changeAirHorn(){
    soundImage.src = './assets/media/images/air-horn.svg'
    hornSound.src = './assets/media/audio/air-horn.mp3'
};

var carHorn = document.getElementById("radio-car-horn");
carHorn.addEventListener('click', changeCarHorn);
function changeCarHorn(){
    soundImage.src = './assets/media/images/car.svg'
    hornSound.src = './assets/media/audio/car-horn.mp3'
};

var partyHorn = document.getElementById("radio-party-horn"); 
partyHorn.addEventListener('click', changePartyHorn);
function changePartyHorn() {
    soundImage.src = './assets/media/images/party-horn.svg'
    hornSound.src = './assets/media/audio/party-horn.mp3'
};

honkBtn.addEventListener("click", audioPlay);
function audioPlay() {
    let volume = volumeNumber.value / 100;
    hornSound.volume = volume;
    hornSound.play();
}
