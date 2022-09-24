/*
Cuando usar objetos o arrays?

Arrays cuando lo que haremos en un elemento es lo mismo que en todos los
demas (la regla se puede incumplir). Mientras que un objeto cuando los
nombres de cada elemento son importantes para nuestro algoritmo.
*/

const array = [ 22, 'jajaja', true, 1.2, -3, null, undefined, [1, 2, 3], { nombre: 'Pepe' }];

const objeto = {
  edad: 22,
  nombre: "Pepe",
  isAlumno: true,
  direccion: {
    calle: "C/ Falsa",
    numero: 123,
  },
  aficiones: ["Fútbol", "Patinaje", "Cine"],
};

if (array[0] === objeto.edad) {
  console.log("Son iguales");
}

// CONVERTIR OBJETO EN ARRAY
// esto sirve solo para los valores de las propiedades de un objeto

const arrayDesdeObjeto = Object.values(objeto);
