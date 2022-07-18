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




