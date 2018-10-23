let menu = document.querySelector('.burguer');
let barra1 = document.querySelector('.barrinha:nth-child(1)');
let barra2 = document.querySelector('.barrinha:nth-child(2)');
let barra3 = document.querySelector('.barrinha:nth-child(3)');
let visible = document.querySelector('nav');
let invisible = document.querySelector('header');
let titulo = document.querySelector('title').innerHTML;

let progresso = document.querySelector('.progresso');
let body = document.querySelector('body');

let a1 = document.querySelector('nav a:nth-child(1)');
let a2 = document.querySelector('nav a:nth-child(2)');
let a3 = document.querySelector('nav a:nth-child(3)');
let a4 = document.querySelector('nav a:nth-child(4)');

menu.onclick = function(){
    barra1.classList.toggle('barrinha1');
    barra2.classList.toggle('barrinha1');
    barra3.classList.toggle('barrinha1');
    visible.classList.toggle('visible');
    menu.classList.toggle('burguer1');
    invisible.classList.toggle('invisible');
}

function ancoraColor(){
    if(titulo == 'Atitude POP - Home'){
        a1.style.color = 'black';
        a1.style.textShadow = '0 0 1px';
        a1.style.letterSpacing = '5px';
    }
    else if(titulo == 'Atitude POP - Portfólio'){
        a2.style.color = 'black';   
        a2.style.textShadow = '0 0 1px';
        a2.style.letterSpacing = '5px';
    }
    else if(titulo == 'Atitude POP - Equipe'){
        a3.style.color = 'black';
        a3.style.textShadow = '0 0 1px';
        a3.style.letterSpacing = '5px';
    }
    else{
        a4.style.color = 'black';
        a4.style.textShadow = '0 0 1px';
        a4.style.letterSpacing = '5px';
    }
}

ancoraColor();


body.onscroll = function(){
    let scrollTotal = body.scrollHeight - innerHeight;
    let proporcao = scrollY / scrollTotal;
    progresso.style.width = `${Math.floor(proporcao * 100)}%`;
}

