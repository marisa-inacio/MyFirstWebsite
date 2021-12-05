// var para guardar o slide ativo
var slideIndex = 1;


function nextSlide(n) {
    // 1 -> next | -1 -> prev
    // slideIndex = slideIndex + n;
    // slideIndex += n;
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    //slideIndex = n;
    showSlide(slideIndex = n);
}

function showSlide(n) {

    // carrega os slides e bolas para as variaveis array
    var slides = document.getElementsByClassName('mySlide');
    var dots = document.getElementsByClassName('myDot');

    // controlar o ultimo slide
    // se chegar ao fim volta ao inicio
    if (n > slides.length) {
        slideIndex = 1;
    }

    // controlar o primeiro slide
    //se anda para a esquerda no primeiro a posicao passa a ser o ultimo slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // limpar os slides e as bolas activas (i++ -> i = i + 1)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].className = dots[i].className.replace(' active', '');
    }

    // mostrar o slide e a bola activo
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active'; // a += b -> a = a + b
}

