var audio = new Audio('https://www.dingusland.fun/s/Double-Click-Loading-g375.mp3');

function playsound(event) { 
    audio.play(event); 
} 

function pausesound(event) { 
  audio.pause(); 
} 


/* event.preventDefault(); // Prevent the default link action
var link = $(this).attr('href'); // Get the link's href

clickSound.play(); */