 function playsound(event, soundUrl) { 
    event.preventDefault(); // Prevent the default link action

    var audio = new Audio(soundUrl);

    var link = event.target.getAttribute('href'); // Get the link's href
    
    audio.currentTime = 0;

    audio.play(); 

    audio.onended = function () {
        window.location.href = link; // Navigate after the sound ends   
      };
} 