const carrosselInner = document.querySelector('.carrossel-inner');
const carrosselItems = document.querySelectorAll('.carrossel-item');
const prevBtn = document.querySelector('.carrossel-btn.antes');
const nextBtn = document.querySelector('.carrossel-btn.prox');

let currentIndex = 0;
let autoSlideInterval; // intevalo do autoplay

// essa funçao atualiza o carrossel
function updateCarrossel() {
    const offset = -currentIndex * 100; // anda com o indice da porcentagem
    carrosselInner.style.transform = `translateX(${offset}%)`;
}

// Função para avançar automaticamente
function autoSlide() {
    currentIndex = (currentIndex + 1) % carrosselItems.length;
     updateCarrossel();
}

// reinicia o autoplay
function restartAutoSlide() {
    clearInterval(autoSlideInterval); 
    autoSlideInterval = setInterval(autoSlide, 3000); 
}


prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carrosselItems.length) % carrosselItems.length;
     updateCarrossel();
    restartAutoSlide();
});

// Botão "Próximo"
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carrosselItems.length;
     updateCarrossel();
    restartAutoSlide();
});

// Inicia o autoplay
autoSlideInterval = setInterval(autoSlide, 3000);