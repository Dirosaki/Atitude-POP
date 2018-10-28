let perfil1 = document.querySelector('.perfil1');
let perfil2 = document.querySelector('.perfil2');
let perfil3 = document.querySelector('.perfil3');
let perfil4 = document.querySelector('.perfil4');
let perfil5 = document.querySelector('.perfil5');
let expand1 = document.querySelector('.perfil1 i');
let expand2 = document.querySelector('.perfil2 i');
let expand3 = document.querySelector('.perfil3 i');
let expand4 = document.querySelector('.perfil4 i');
let expand5 = document.querySelector('.perfil5 i');
let nome1 = document.querySelector('.perfil1 .trNome');
let nome2 = document.querySelector('.perfil2 .trNome');
let nome3 = document.querySelector('.perfil3 .trNome');
let nome4 = document.querySelector('.perfil4 .trNome');
let nome5 = document.querySelector('.perfil5 .trNome');



expand1.onclick = function(){
    perfil1.classList.toggle('perfil0');
    expand1.classList.toggle('trIcon');
    nome1.classList.toggle('trNome1');
}
expand2.onclick = function(){
    perfil2.classList.toggle('perfil0');
    expand2.classList.toggle('trIcon');
    nome2.classList.toggle('trNome1');
}
expand3.onclick = function(){
    perfil3.classList.toggle('perfil0');
    expand3.classList.toggle('trIcon');
    nome3.classList.toggle('trNome1');
}
expand4.onclick = function(){
    perfil4.classList.toggle('perfil0');
    expand4.classList.toggle('trIcon');
    nome4.classList.toggle('trNome1');
}
expand5.onclick = function(){
    perfil5.classList.toggle('perfil0');
    expand5.classList.toggle('trIcon');
    nome5.classList.toggle('trNome1');
}