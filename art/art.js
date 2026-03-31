document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  const audio1 = new Audio("/src/audio/JSRFsprays/spray1.mp3");
  const audio2 = new Audio("/src/audio/JSRFsprays/spray8.mp3");
  const audio3 = new Audio("/src/audio/JSRFsprays/spray3.mp3");

  // Check if the user is on a mobile device

  // Source - https://stackoverflow.com/a/11381730
// Posted by Michael Zaporozhets, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-28, License - CC BY-SA 4.0

/* function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i 
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
} */

function detecDevice() {
    let device = '';

    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        device = true;
    } else {
        device = false;
    }
    return device;
    /* console.log(device); */
}


  // Add click event to all images
  document.querySelectorAll(".grid-box img").forEach((img) => {
    img.addEventListener("click", () => {

      if (!(detecDevice())) {
      audio3.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });}

      lightboxImg.src = img.src;
      lightbox.classList.remove("hidden");
    });
  });

  // Close lightbox when the close button is clicked
  closeBtn.addEventListener("click", () => {

    if (!(detecDevice())) {
    audio1.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });}

    lightbox.classList.add("hidden");
    lightboxImg.src = "";
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      if (!(detecDevice())) {
      audio1.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });}

      lightbox.classList.add("hidden");
      lightboxImg.src = "";
    }
  });



//shitty attempt at muting sound on moile


/*  function playsound(event, soundUrl) { 
  if (detecDevice()) {
    event.preventDefault(); // Prevent the default link action

    var audio = new Audio(soundUrl);

    var link = event.target.getAttribute('href'); // Get the link's href
    
    audio.currentTime = 0;

    audio.play(); 

    audio.onended = function () {
        window.location.href = link; // Navigate after the sound ends   
      };
}} */

document.getElementById("sound1").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default link action

    

    var link = event.target.getAttribute('href'); // Get the link's href
    
    audio1.currentTime = 0;

    audio1.play(); 

    audio1.onended = function () {
        window.location.href = link; // Navigate after the sound ends   
      };
    
    });

document.getElementById("sound2").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default link action

    

    var link = event.target.getAttribute('href'); // Get the link's href
    
    audio2.currentTime = 0;

    audio2.play(); 

    audio2.onended = function () {
        window.location.href = link; // Navigate after the sound ends   
      };
    
    });

document.getElementById("sound3").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default link action

    

    var link = event.target.getAttribute('href'); // Get the link's href
    
    audio3.currentTime = 0;

    audio3.play(); 

    audio3.onended = function () {
        window.location.href = link; // Navigate after the sound ends   
      };
    
    });

});