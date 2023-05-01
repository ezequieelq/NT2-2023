const personajesSimpsons = [
    { nombre: "Homero", edad: 39, rol: "Padre" },
    { nombre: "Marge", edad: 36, rol: "Madre" },
    { nombre: "Bart", edad: 10, rol: "Hijo" },
    { nombre: "Lisa", edad: 8, rol: "Hija" },
    { nombre: "Maggie", edad: 1, rol: "Hija" },
    { nombre: "Ned", edad: 35, rol: "Vecino" },
    { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
    { nombre: "Milhouse", edad: 10, rol: "Amigo" },
    { nombre: "Nelson", edad: 12, rol: "Bravucón" },
    { nombre: "Martin", edad: 10, rol: "Compañero de clase" }
    ];

const personajesMenores = personajesSimpsons.filter(personaje => personaje.edad<18)

//const edades = personajesSimpsons.reduce((suma, actual) => suma.edad + actual.edad,0)
const edades = personajesSimpsons.reduce((acumulador, actual) => acumulador + actual.edad, 0);

const nombres = personajesMenores.map(personaje => personaje.nombre)

console.log(nombres)

