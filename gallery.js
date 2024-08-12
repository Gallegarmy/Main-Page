document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");

  // Get the image and insert it inside the modal
  const modalImg = document.getElementById("modalImage");
  const regex = /\.\/img\/[a-zA-Z0-9_\-]+\.webp/g;
  const items = document.querySelectorAll(".gallery-item");

  for (const item of items) {
    item.onclick = () => {
      const imgsrc = item.outerHTML.match(regex)[0];
      modal.style.display = "flex";
      modalImg.src = imgsrc;
    };
  }
});

const span = document.getElementsByClassName("close")[0];

span.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

if ("IntersectionObserver" in window) {
  const lazyImageObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.onload = () => lazyImage.classList.add("loaded");
        lazyImage.classList.remove("lazy");
        lazyImageObserver.unobserve(lazyImage);
      }
    }
  });

  for (const lazyImage of lazyImages) {
    lazyImageObserver.observe(lazyImage);
  }
} else {
  for (const lazyImage of lazyImages) {
    lazyImage.src = lazyImage.dataset.src;
    lazyImage.onload = () => lazyImage.classList.add("loaded");
    lazyImage.classList.remove("lazy");
  }
}
