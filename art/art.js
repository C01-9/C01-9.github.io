document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  const audio = new Audio("/src/audio/JSRFsprays/spray1.mp3");

  // Add click event to all images
  document.querySelectorAll(".grid-box img").forEach((img) => {
    img.addEventListener("click", () => {
      
      audio.volume = 1.0; // Ensure full volume
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });

      lightboxImg.src = img.src;
      lightbox.classList.remove("hidden");
    });
  });

  // Close lightbox when the close button is clicked
  closeBtn.addEventListener("click", () => {
    lightbox.classList.add("hidden");
    lightboxImg.src = "";
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add("hidden");
      lightboxImg.src = "";
    }
  });
});

/* function playsound(event, soundUrl) { 
    event.preventDefault(); // Prevent the default link action

    var audio = new Audio(soundUrl);

    var link = event.target.getAttribute('href'); // Get the link's href
    
    audio.currentTime = 0;

    audio.play(); 

    audio.onended = function () {
        window.location.href = link; // Navigate after the sound ends   
      };
}  */