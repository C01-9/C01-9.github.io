var audio = document.getElementById("myAudio"); 

function playsound(event) { 
    audio.play(); 
} 

function pausesound(event) { 
  audio.pause(); 
} 


/* event.preventDefault(); // Prevent the default link action
var link = $(this).attr('href'); // Get the link's href

clickSound.play(); */