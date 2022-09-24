// console.log("Hello desde archivo script.js")

const h1 = document.querySelector('h1');

const parrafo = document.querySelector('p');

// const parrafoConClase = document.querySelector('.parrafo-con-clase')
const parrafoConClase = document.getElementsByClassName('parrafo-con-clase');

// const parrafoConId = document.querySelector('#parrafo-con-id')
const parrafoConId = document.getElementById('parrafo-con-id');

const input = document.querySelector('input');

console.group('Modificación de atributos del h1')
console.log(h1.getAttribute('curso')) // platzi
console.log(h1.getAttribute('class')) // verde
h1.setAttribute('class', 'rojo')
console.log(h1.getAttribute('class')) // rojo
h1.classList.add('verde');
console.log(h1.getAttribute('class')) // rojo verde
h1.classList.remove('rojo');
console.log(h1.getAttribute('class')) // verde
h1.classList.toggle('rojo'); // prende o apaga dependiendo si tiene o no
console.log(h1.getAttribute('class')) // verde rojo
console.groupEnd()


// Creación de elementos mediante JS

const img = document.createElement('img');
img.setAttribute('src', 'https://placeimg.com/200/200/animals');

const parrafoConIdVacio = document.getElementById('parrafo-con-id-vacio');

parrafoConIdVacio.append(img);