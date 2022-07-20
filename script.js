//Estou aprendendo desenvolvimento web!!

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// Classe Show
function mostrar() {  
    document.querySelector('.nav').classList.add('show')
    
}

function remover() {
  document.querySelector('.nav').classList.remove('show')
}

/* Botão voltar para o topo*/
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function(){
  if (window.scrollY >= 100) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})


