
// La forma correcta de definir el tipo es después del nombre de la variable, antes del =

const objeto: {prop1: string, prop2: number} = {
    prop1: "Hola",
    prop2: 2
}

//Aunque normalmente para que sea más legible primero utilizaremos type para definir el tipo y luego inicializaremos el objeto

type TypedObject = {
    property_a : number; //fíjate que aquí se utiliza ; en vez de ,
    property_b: string;
}

const initalizedObject: TypedObject = {
    property_a: 32,
    property_b: "Hello"
} 

//Esto es un ejemplo de desestructuración
type Persona = {
    name: string;
    age: number;
}

const persona  = {
    name: "Ana",
    age: 28
}

function saludar({name, age}: Persona){
    console.log(`Hello ${name}, you are ${age} years old`);
}

console.log(saludar(persona));
