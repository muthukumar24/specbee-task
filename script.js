// Carousel Functionality
const leftButton = document.getElementById('carouselLeft');
const rightButton = document.getElementById('carouselRight');
const sliderCards = document.querySelector('.speakers-slider__cards');
let scrollAmount = 0;

leftButton.addEventListener('click', () => {
  sliderCards.scrollBy({ left: -250, behavior: 'smooth' });
});

rightButton.addEventListener('click', () => {
  sliderCards.scrollBy({ left: 250, behavior: 'smooth' });
});

// Modal Functionality
const modal = document.getElementById('speakerModal');
const closeModalButton = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalTitle = document.getElementById('modalTitle');
const modalCompany = document.getElementById('modalCompany');
const modalBio = document.getElementById('modalBio');

// Open modal with speaker info
document.querySelectorAll('.speaker-card').forEach(card => {
  card.addEventListener('click', () => {
    modalImage.src = card.querySelector('.speaker-card__image').src;
    modalName.textContent = card.dataset.name;
    modalTitle.textContent = card.dataset.title;
    modalCompany.textContent = card.dataset.company;
    modalBio.textContent = card.dataset.bio;
    modal.style.display = 'flex';
  });
});

// Close modal
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
