var audio = new Audio('/../src/audio/mario_paint_cat_meow.mp3');

function playsound(event) { 
    /* event.preventDefault(); // Prevent the default link action
    var link = $(this).attr('href'); // Get the link's href */

    audio.play(event); 

    /* audio.onended = function () {
        window.location.href = link;
    }; */
} 

function pausesound(event) { 
  audio.pause(); 
} 


/* event.preventDefault(); // Prevent the default link action
var link = $(this).attr('href'); // Get the link's href

clickSound.play(); */