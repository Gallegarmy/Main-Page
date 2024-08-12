document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("imageModal");

  // Get the image and insert it inside the modal
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");
  const regex = /\.\/img\/[a-zA-Z0-9_\-]+\.jpg/g;
  var items = document.querySelectorAll(".gallery-item");
  console.log(items);

  items.forEach(function (item) {
    item.onclick = function () {
      var imgsrc = item.outerHTML.match(regex)[0];
      modal.style.display = "flex";
      modalImg.src = imgsrc;
    };
  });

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.onload = () => lazyImage.classList.add("loaded");
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    lazyImages.forEach(function (lazyImage) {
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.onload = () => lazyImage.classList.add("loaded");
      lazyImage.classList.remove("lazy");
    });
  }
});
