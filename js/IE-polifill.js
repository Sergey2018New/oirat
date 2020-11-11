document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));
  var active = false;
  var lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {

          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            if (lazyImage.dataset.src !== undefined){
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
            }
            if (lazyImage.dataset.backgroundImage !== undefined){
              lazyImage.style.backgroundImage = "url('" + lazyImage.dataset.backgroundImage + "')";
            }

            lazyImage.dataset.loaded = true;
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              document.removeEventListener("click", lazyLoad);
              document.removeEventListener("mouseleave", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });

        active = false;
      }, 200);
    }
  };

  lazyLoad();

  document.addEventListener("scroll", lazyLoad);
  document.addEventListener("mouseleave", lazyLoad);
  document.addEventListener("click", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});