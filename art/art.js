document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  // Add click event to all images
  document.querySelectorAll(".grid-box img").forEach((img) => {
    img.addEventListener("click", () => {
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