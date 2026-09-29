/* 
// La forma correcta de definir el tipo es después del nombre de la variable, antes del =

const objeto: { prop1: string, prop2: number } = {
    prop1: "Hola",
    prop2: 2
}

//Aunque normalmente para que sea más legible primero utilizaremos type para definir el tipo y luego inicializaremos el objeto

type TypedObject = {
    property_a: number; //fíjate que aquí se utiliza ; en vez de ,
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

const persona = {
    name: "Ana",
    age: 28
}

function saludar({ name, age }: Persona) {
    console.log(`Hello ${name}, you are ${age} years old`);
}

console.log(saludar(persona));

//Functions

const object2 = {
    prop1: "Ana",
    prop2: "Pedro",
    prop3: "Jaime"
}

const persona1 = object2.prop1;
const persona2 = object2.prop2;
const persona3 = object2.prop3;

console.log(persona1 + persona2 + persona3);

const {prop1, prop2} = object2;
console.log(prop1 + prop2);
 */
/* 
const myVariable = "Hola mundo!"
console.log(myVariable) */

/* //Ejemplo de una función normal
function myFunction(a: number, b:number): number{
    return a + b
};

//Ejemplo de una arrow function con retorno explícito
const myFunction2 = (a:number, b:number):number => { return a - b };

//Ejemplo de una arrow function con retorno implícito
const myFunction3 = (a:number, b:number) => a * b;

console.log(myFunction(3,2));
console.log(myFunction2(3,2));
console.log(myFunction3(3,2)); */

/* const function1 = () => 5;
const function2 = () => {5}; // Devuelve undefined
const function3 = () => { return 5 }; // ` => { ` Indica cuerpo de función, no objeto
const function4 = () => ({number: 5}); // ` => ({` Indica objeto

console.log(function1());
console.log(function2());
console.log(function3());
console.log(function4()); */
/* 
type MiFuncion = (usuario:{nombre: string}) => void; //Void es un tipo, quiere decir que no importa lo que devuelva

const ejecutarConUsuario = (user: string, fn: MiFuncion) => fn({nombre: user});

const saludarFunc: MiFuncion = ( usuario: {nombre: string}) => "Hola " + usuario.nombre;


console.log(ejecutarConUsuario("Juan", saludarFunc)); */
/* 
type MiFuncion = (usuario:{nombre: string}) => undefined; //Void es un tipo, quiere decir que no importa lo que devuelva

const ejecutarConUsuario = (user: string, fn: MiFuncion) => fn({nombre: user});

const saludarFunc: MiFuncion = ( usuario: {nombre: string}) => "Hola " + usuario.nombre;


console.log(ejecutarConUsuario("Juan", saludarFunc));
 */

/* const saludar: MiFuncion = (usuario:{nombre: string}) => "Hola" + usuario.nombre;

console.log(saludar({nombre: "Juan"}));
console.log(typeof saludar);
console.log(typeof saludar({nombre: "Juan"})) */



/* const noReturnFunction = (contador: {n: number}) => {contador.n += 1}
const myNum = {n: 1};
console.log(noReturnFunction(myNum));
console.log(myNum); */

/* 
type FunctionVoid = (nombre: string) => void;
const usarConTexto = (texto: string, fn: FunctionVoid) => fn(texto);
console.log(usarConTexto("Hola Juan", (n) => n + ", como estas?"));
 */
/* 
//Si la variable que guarda el valor se llama igual que la propiedad, puedes escribir solo la prop una vez
const edad = 25;
const usuario = {nombre: "Juan", edad}; // = {nombre: "Juan, edad: 25}
console.log(usuario); */
/* //Es lo contrario de la desestructuración, si está a la izda, extraes la prop de un objeto en una variable, si está a la derecha, creas la propiedad en un objeto
const persona = {altura: "1,7m", peso: 85}
const {altura} = persona;
console.log(altura); //"1,7m"

const nombre = "Julian";
const usuario = {nombre};
console.log(usuario); // {nombre: "Julian"} */


/* const saludar = (t: string) => "Hola " + t;
console.log(saludar("Juan")); */

/* const myFunction = () => "Hola mundo";
const myObject = {fn: myFunction};
console.log(myObject.fn()); //Hola mundo */

/* const myArray = [() => "Hola mundo", 2, 3];//El tipo del array para TS es (number | (() => string))[]
console.log(myArray[0]()); // TS no sabe si esto es un number o un () => string, por eso te lanza error
console.log(myArray[1]);
console.log(myArray[2]);

const myArray2 : [()=> string, number, number] = [() => "Hola mundo", 2, 3]; //Al definir los tipos, lo conviertes en tupla y TS ya sabe el orden
console.log(myArray2[0]());
console.log(myArray2[1]);
console.log(myArray2[2]);

const myArray3 = [() => "Hola mundo", 2, 3] as const; //tupla de solo lectura
console.log(myArray3[0]());
console.log(myArray3[1]);
console.log(myArray3[2]);

//Array vs tupla
const arreglo: number[] = [1,2,3]; // `: tipo[]` define un array
const tupla: [string, number, number] = ["Hola", 1, 2]; //`: [tipo, tipo,...tipo]` define una tupla
const tupla2 = ["Hola", 1, 2] as const; //`as const` hace que sea una tupla de solo lectura */

/* //Definimos función que pueda recibir otra función como parámetro (callback)
const myFunction = (texto: string, fn: (t:string) => string) => console.log(fn(texto));

const concatenarMundo = (texto: string) => texto + " mundo";

myFunction("Hola", concatenarMundo);//Estamos pasando esta función como parámetro */

/* const crearSumador = (n: number) => (x: number) => x + n;

const sumar10 = crearSumador(10);

console.log(sumar10(5)); */
/* 
const funcionDePrimerOrden = (n: number, fn: (t:number) => number) => {
	console.log(fn(n));
}
funcionDePrimerOrden(2, (t) => t + 10); */


/* //Con alias de tipo
type Sumar = (n: number) => number;

const aplicarYmostrar = (num: number, fn: Sumar) => { console.log(fn(num))};

aplicarYmostrar(7, (t) => t+5);
 */

//optional properties

// type Hero = {
//     id: number;
//     name: string;
//     age: number;
//     sex: string;
//     isActive?: boolean; //Cuando creemos un tipo Hero será opcional informar isActive
//     isTired?:string;
// }

// //optional chain execution
// let thor: Hero = { id: 1, name: "thor", age: 32, sex: "M", isActive: true};


// thor.isTired?.toLowerCase(); //El propio TS escribe el `?` automáticamente
// //isTired al ser opcional no se sabe si estará informado. Si lo está hará la llamada, sino no.


// //readonly property -> Puede solventar el problema de la mutabilidad de los objetos
// type Hero2 = {
//     readonly id: number;
//     name: string;
// }

// //Si creamos uno
// const myHero2: Hero2 = {id: 1234, name: "Spiderman"};

// //myHero2.id = 3; //ERROR


// //Object freeze -> Código para hacer un objeto no editable
// Object.freeze(myHero2);

// myHero2.name = "Hello";

// console.log(myHero2); //{ id: 1234, name: 'Spiderman' }

// //Template union types

// type Id = `${string}-${string}-${string}-${string}-${string}`;

// type Hero3 = {
//     id: Id
//     name: string
// };

// function createHero3(name: string) : Hero3{
//     const id = crypto.randomUUID();
//     return {
//         id,
//         name
//     }
// }


// //Intersection types
// type BasicUser = {
//     name: string
//     age: number
// };

// type ExtendedUser = {
//     active: boolean
//     tel?: number
//     email: string
// }

// type User = BasicUser & ExtendedUser;

// function createUser(u: BasicUser): User {
//     const {name, age} = u
//     return{
//         name,
//         age,
//         active: true,
//         email: "example@gmail.com"
//     }

// }


// // //Type indexing

// type Hero = {
//     name: string
//     bag:{
//         chips:number
//         cola: number
//     }
// }

// const fillBag = (chips: number, cola: number): Hero["bag"] => ({chips, cola});


// //Type from value

// const keyboard = {
//     keys: 32,
//     language: "ES",
//     size: "sm"
// }

// type Keyboard = typeof keyboard;

// //Type from function return
// type FillBag = ReturnType<typeof fillBag>;

// type ConId = { id: string };
// type User = {id: number}
// type UserConId = ConId & User;

// const user: UserConId = { id: 123}
// type User = {nombre: string, age: number};

// const myFunction = ():User => ({nombre: "juan", age: 15});

// type OtherUser = ReturnType<typeof myFunction>;


// //Tuplas -> son arrays con una longitud determinada y tipo determinado

// type CellValue = "X" | "" | "O";

// type Gameboard = [
//     [CellValue, CellValue, CellValue],
//     [CellValue, CellValue, CellValue],
//     [CellValue, CellValue, CellValue]
// ]

// const gameBoard: Gameboard = [
//     ["O", "X", "O"],
//     ["X", "", "O"],
//     ["X", "O", "X"]
// ]

// type RGB = [number, number, number];
// const rgb: RGB = [0, 255, 255];

// //En react el hook useState() devuelve una tupla;
// type State = [string, (s:string) => void]
// const [hero, setHero]: State = useState("thor");


// type CellValue = "X" | "O" | "";
// type Fila = [CellValue, CellValue, CellValue];
// type Tablero = [Fila, Fila, Fila];
// type Indice = 0 | 1 | 2;
// type Posicion = [Indice, Indice];
// declare const t: Tablero;


// const jugar = (tablero: Tablero, [fila, col]: Posicion, jugador: "X" | "O"): Tablero => {
//   const tableroFinal = tablero.map((fila_actual, fila_actual_index) => {
//     if(fila_actual_index === fila){
//         return fila_actual.map((row, row_index) => {
//             if(row_index === col){
//                 return jugador;
//             } else{
//                 return row;
//             }
//         })
//     } else{
//         return fila_actual;
//     }
//   }) as Tablero;

//   return tableroFinal;
// };


// Problema 2: Tu propio useState

// Vas a construir una versión simplificada de useState para entender por qué devuelve una tupla.

// a) Escribe una fábrica crearEstado que reciba un inicial: number y devuelva una tupla con dos funciones:
type Estado = [() => number, (n:number) => void];

const crearEstado = (inicial: number): Estado => {
    let leer = () => inicial;
    const escribir = (n:number) => {inicial = n}; 
    return [leer, escribir];
}

// la primera, leer, sin parámetros, que devuelve el valor actual;
// la segunda, escribir, que recibe un number y actualiza el valor.

// Tipa el retorno con un alias Estado.

const [leer, escribir] = crearEstado(10);
console.log(leer());        // 10
escribir(25);
console.log(leer());        // 25











