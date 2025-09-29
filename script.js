document.querySelector("form")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const dateInput = document.getElementById("res-date");
  const selectedDate = new Date(dateInput.value);
  const today = new Date();
  today.setHours(0,0,0,0); // ignoruje čas, porovnává jen datum

  if (selectedDate < today) {
    alert("Vyberte prosím datum v dnešku nebo v budoucnu.");
    return;
  }

  alert("Děkujeme, vaše rezervace byla odeslána!");
});

const features = document.querySelectorAll(".feature");

function checkFeatures() {
  const triggerBottom = window.innerHeight * 0.9; // kdy se spustí

  features.forEach(feature => {
    const featureTop = feature.getBoundingClientRect().top;

    if (featureTop < triggerBottom) {
      feature.classList.add("visible");
    }
  });
}


// spustit při scrollu a na začátku
window.addEventListener("scroll", checkFeatures);
window.addEventListener("DOMContentLoaded", checkFeatures);

const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Zavření lightboxu pomocí klávesy Escape
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

