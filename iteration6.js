// Iteration#6

//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (var bucle = 0; bucle < 10; bucle++) {
  console.log (bucle)
}


console.log('Aquí empieza el 1.2')

//1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
//cuando el resto del numero dividido entre 2 sea 0.

for (var num = 0; num < 10; num++) {
   if (num / 2 == 0) {
    console.log (num)
   }
}

console.log('Aquí empieza el 1.3')


//1.3 Crea un bucle para conseguir dormir contando ovejas. 
//Este bucle empieza en 0 y termina en 10. 
//Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
//y cambia el mensaje en la última vuelta a 'Dormido!'.

for (var num = 0; num < 10; num++) {
  if (num < 9) {
   console.log ('Intentando dormir')
  } else (console.log ('Dormido!'))
  
}