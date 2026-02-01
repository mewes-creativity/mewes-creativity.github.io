let slides = [];
let currentIndex = 0;

const imgEl = document.getElementById("carouselImage");
const textEl = document.getElementById("carouselText");

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    slides = data;
    showSlide(0);
  })
  .catch(err => {
    console.error("Failed to load data.json", err);
  });

function showSlide(index) {
  imgEl.src = slides[index].image;
  textEl.value = slides[index].text;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

//showSlide(currentIndex);