// console.log("Hello desde archivo script.js")

const h1 = document.querySelector('h1');

const parrafo = document.querySelector('p');

// const parrafoConClase = document.querySelector('.parrafo-con-clase')
const parrafoConClase = document.getElementsByClassName('parrafo-con-clase');

// const parrafoConId = document.querySelector('#parrafo-con-id')
const parrafoConId = document.getElementById('parrafo-con-id');

const input = document.querySelector('input');

console.log({
  h1,
  parrafo,
  parrafoConClase,
  parrafoConId,
  input
})

console.log(input.value);