const info = [
    {imagen : "images/captain.jpg", informacion : "capitana"},
    {imagen : "images/daylight.jpg", informacion : "daylight"},
    {imagen : "images/drstrange.jpg", informacion : "doctor"},
    {imagen : "images/logan.jpg", informacion : "logan"},
    {imagen : "images/chris.jpg", informacion : "mision"},
    {imagen : "images/shang.jpg", informacion : "shang"},
    {imagen : "images/tomorrowwar.jpg", informacion : "war"}
]

let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides( indice+=n );
}

function posicionSlide(n){
    muestraSlides(indice=n);
}
setInterval(function tiempo(){
    muestraSlides(indice+=1)
},4000);

const fragment = document.createDocumentFragment();
const barras = document.querySelector('.barras');
const material = document.querySelector('.nombrePelicula');

info.forEach(e => {
    //Añadiendo la imagen de las peliculas
    const span = document.createElement('SPAN');
    const image = document.createElement('IMG');
    const link = document.createElement('A');
    //Creando btn informacion
    const botonInfo = document.createElement('BUTTON');
    const botonInfoDiv = document.createElement('DIV');
    const botonInfoImg = document.createElement('DIV');
    const botonInfoSpan = document.createElement('SPAN');
    //Creando btn Play
    const botonPlay = document.createElement('BUTTON');
    const botonPlayDiv = document.createElement('DIV');
    const botonPlayImg = document.createElement('DIV');
    const botonPlaySpan = document.createElement('SPAN');
    //Creando un div para cada pelicula
    const peliculas = document.createElement('DIV');

    const botones = document.createElement('DIV');
    botonPlaySpan.textContent = "Play";
    botonPlayImg.innerHTML = `<svg viewBox="0 0 24 24"><path d="M6 4l15 8-15 8z" fill="currentColor"></path></svg>`
    botonPlay.classList.add('botonPlay');
    botonPlay.setAttribute("type", "button");

    botonInfoSpan.textContent = "Más información"
    botonInfoImg.innerHTML = `<svg viewBox="0 0 24 24"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z" fill="currentColor"></path></svg>`;
    botonInfo.classList.add('botonInfo');
    botonInfo.classList.add(e.informacion);
    botonInfo.setAttribute("type", "button");

    botones.classList.add('botones');
    
    link.setAttribute("href", "productos.html");
    peliculas.classList.add(e.informacion); //Añadiendo la clase de nombre de la pelicula respectivamente.
    
    botonPlay.appendChild(botonPlayDiv);
    botonPlay.appendChild(botonPlaySpan);
    botonPlayDiv.appendChild(botonPlayImg);
    link.appendChild(image);
    botonInfo.appendChild(botonInfoDiv);
    botonInfoDiv.appendChild(botonInfoImg);
    botonInfoDiv.appendChild(botonInfoSpan);
    span.appendChild(link);
    botones.appendChild(botonPlay);
    botones.appendChild(botonInfo);
    image.setAttribute("src", `${e.imagen}`);
    span.classList.add('barra');
    peliculas.appendChild(span);
    peliculas.appendChild(botones);
    fragment.appendChild(peliculas);
});
barras.appendChild(fragment);

function muestraSlides(n){
    let i;
    let slides = document.querySelectorAll('.miSlider');
    // let barras = document.querySelectorAll('.barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[indice-1].style.display = 'block';
}

/* Usar LocalStorage para guardar el valor de la película que se presione. 
luego de dar click en cualquier pelicula, este eliminará los demás valores 
que se hayan guardado para así sólo tener un valor en el localStorage.
*/
let capitanaE = document.querySelector('.capitana').addEventListener('click', e => {borrarStorage('capitana')});
let daylightE = document.querySelector('.daylight').addEventListener('click', e => {borrarStorage('daylight')});
let doctorE = document.querySelector('.doctor').addEventListener('click', e => {borrarStorage('doctor')});
let loganE = document.querySelector('.logan').addEventListener('click', e => {borrarStorage('logan')});
let misionE = document.querySelector('.mision').addEventListener('click', e => {borrarStorage('mision')});
let shangE = document.querySelector('.shang').addEventListener('click', e => {borrarStorage('shang')});
let warE = document.querySelector('.war').addEventListener('click', e => {borrarStorage('war')});

const borrarStorage = valor => {
    for (const i of info) {
        localStorage.removeItem(i.informacion);
    }
    localStorage.setItem(valor, valor);
}