// Iteration #1

let myFavoritehHero = "Hulk";

let x = 50;

let h = 5;

let y = 10;

let z = h + y;

// Iteration #2

const character = {name:  'Jack Sparrow', age: 10};

// 1.1 / Hay que cambiar la edad a 25.
character.age = 25;

console.log(character)

// 1.2 / Declara las variables y muestra la frase por la consola

let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;

console.log('Soy ' + firstName + ' ' + lastName + ', ' + 'tengo ' + age + ' años y me gustan los lobos.');

// 1.3 / Console.log con la suma del precio de los juguetes.

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(toy1.price + toy2.price);

// 1.4 / Actualiza el valor de la variable globalBasePrice

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;

car1.finalPrice = globalBasePrice + car1.basePrice;
car2.finalPrice = globalBasePrice + car2.basePrice;

console.log(car1.finalPrice)
console.log(car2.finalPrice)

// Iteration #3 — Operadores

// 1.1 / Multiplica 10 por 5 y muestra el resultado mediante alert.

let multiplicacion = 10 * 5;
alert(multiplicacion);

