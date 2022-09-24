let nombre = "Fernando";
let apellido = "Sayago";
let username = "fsayago";
let mail = "sayago.fernand0@gmail.com";
let mayorEdad = true;
let dineroAhorrado = 10000;
let deudas = 8000;


const nombreCompleto = `${nombre} ${apellido}`;
const capital = dineroAhorrado - deudas;

document.write ("Mi nombre y apellido son: " + nombreCompleto + "<br>");
document.write ("Mi ahorro descontando mis deudas corresponde a: " + capital + " pesos");