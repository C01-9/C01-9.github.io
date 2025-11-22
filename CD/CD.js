document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.getElementById("lightbox-close");
  const lightboxP = document.getElementById("lightbox-p");

  // Add click event to all images
  /*
  document.querySelectorAll(".grid-box img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove("hidden");
    });
  });
  */

document.querySelectorAll(".grid-box").forEach((div) => {
    div.addEventListener("click", () => {
      lightboxP.innerHTML = div.innerHTML;
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



