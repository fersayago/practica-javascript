const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btn-calcular');
const parrafoResultado = document.getElementById('parrafo-resultado')

function btnOnClick(){
  const valor1 = input1.value;
  const valor2 = input2.value;
  const resultado = parseInt(valor1) + parseInt(valor2);
  parrafoResultado.innerHTML = resultado;
}