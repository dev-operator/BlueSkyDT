const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const productImages = document.querySelectorAll(".product-images img");

let currentImageIndex = 0;

productImages[currentImageIndex].classList.add("active");

prevButton.addEventListener("click", function () {
  productImages[currentImageIndex].classList.remove("active");
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = productImages.length - 1;
  }
  productImages[currentImageIndex].classList.add("active");
});

nextButton.addEventListener("click", function () {
  productImages[currentImageIndex].classList.remove("active");
  currentImageIndex++;
  if (currentImageIndex >= productImages.length) {
    currentImageIndex = 0;
  }
  productImages[currentImageIndex].classList.add("active");
});
