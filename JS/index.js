

// for (desde; hasta; actualizacion;){}

// ESTRUCTURA CON FOR 

// for (let i = 1; i <=10; i++){ 
//     if(i === 6){ 
//         break
//     }
//     console.log(i);
// }

// for (let i = 1; i <=10; i++){ 
//     if(i === 6){ 
//         continue
//     }
//     console.log(i);
// }





// ESTRUCTURA CON WHILE 

// let cuenta = parseInt(prompt("Ingrese su numero de cuenta"));
// let intentos = 0; 

// while(cuenta != "02"){ 
//     alert("Cuenta no registrada"); 

//     if(intentos === 3){ 
//       break; 
//     }

//     intentos++
//     prompt("Ingrese su numero de cuenta")
// }

// if(intentos === 3){
//     alert("Vuelva a intentar en 5 minutos");
//     prompt("Ingrese su numero de cuenta"); 
// }else(
//     alert("Cuenta registrada")
// );


//ESTRUCTURA CON WHILE Y SWITCH 

// let palabraClave = prompt("Ingresa la palabra clave") 

// while(palabraClave != "javascript"){

//         switch(palabraClave){ 
//             case "css":
//                 console.log("No estamos en CSS");
//                 break;
//             case "html":
//                 alert("No estamos en HTML");
//                 break; 
//             default: 
//             alert("Ingresaste");
//             break; 
//     }

// }





/* ESTRUCTURA DE UNA FUNCION 

function nombreFuncion(){ };

despues llamar la funcion =

nombreFuncion("parentesis vacios es decir que se ejecuta");
*/


//FUNCION CON RETURN / NORMAL

// function suma (a, b){ 
//     let resultado = a + b;
//     return resultado; 
// }


// //FUNCION SIN RETURN = ARROW 

// const resta = (a,b) => a - b; 

// console.log(resta(4,2));



//FUNCION A ENTREGAR 

//DESCRIPCION = ES UNA FUNCION QUE CONSTA DE UNA COMPRA DE 2 PRODUCTOS CON UN DESCUENTO 

// const multiplicacion = (a , b) => a * b; 
// const cantidadProducto = (a , b) => a - b; 


// let precioProducto = 2000; 
// let descuento = 350; 
// let cantidadCompra = 2; 

// let total = cantidadProducto(multiplicacion(precioProducto,cantidadCompra),descuento);

// total = cantidadProducto((2000 * 2), 300); 

/* 
    let total = cantidadProducto(multiplicacion(2000 * 2),descuento);
    let total = cantidadProducto(4000, descuento);
    let total = cantidadProducto(4000, 350); 
    let total = 4000 - 350; 
    let total = 3650;  
);

*/ 


//LLEGAR AL RESULTADO FINAL DE UN VIDEOJUEGO CON IMPUESTO EN EL PAGO

// const oferta = (a , b, c) => a * b / c; 
// const impuesto = x => 1.65 * x ; 

// let videojuego = 1370;
// let ofertaPorcentaje = 30; 
// let valorC = 100; 

// let resultado = impuesto(oferta(videojuego, ofertaPorcentaje, valorC))
    
//     resultado = impuesto (oferta(1370, ofertaPorcentaje, valorC));
//     resultado = impuesto (oferta(1370 * 30, valorC));
//     resultado = impuesto (oferta(1370 * 30 / 100));
//     resultado = impuesto (oferta(41.100 / 100));
//     resultado = impuesto (oferta (411)); 
//     resultado = 1.65 * 411; 
//     resultado = 678,15; 












// "SPLICE" SE USA PARA ELIMINAR PARAMETROS DESDE UNA POSICION SELECCIONADA HASTA OTRA POSICION SELECCIONADA

// const array3 = ["Juan", "Pepe", "Tomas", "Mariana", "Carlos", "Jose"]; 

// array3.splice(6); 
// console.log(array3);

// // TAMBIEN SE PUEDE UTILIZAR PARA CAMBIAR 

// {const array3 = ["Juan", "Pepe", "Tomas", "Mariana", "Carlos", "Jose"]; 

// array3.splice(4, 1, 'josesito'); 
// console.log(array3);}

// {
// const array3 = ["Juan", "Pepe", "Tomas", "Mariana", "Carlos", "Jose"]; 
// array3.splice(1, 3, 'josesito', 'pepito', 'jorgito');
// console.log(array3);}




// "indexOF" busca la posicion del elemento pedido, si el mismo no existe retorna -1
// {
// const array3 = ["Juan", "Pepe", "Tomas", "Mariana", "Pensar", "Ejemplos", "Largos"];
// console.log(array3.indexOf("Largos")); }





// "includes" para ver si esta o no dicho parametro

// {
// const array3 = ["Juan", "Pepe", "Tomas", "Mariana", "Pensar", "Ejemplos", "Largos"];
// console.log(array3.includes("Juana")); //false
// console.log(array3.includes("Juan")); //true
// }





// "reverse" para modificar en reversa el array
// {
// const array3 = ["Maria", "Jose", "Pepe", "Jorge"]; 
// array3.reverse(); 
// console.log(array3);}




//RECORRER UN ARRAY 

// const productos = [
//   {id: 1, nombre: "Gabinete"},
//   {id: 2, nombre: "GPU"}, 
//   {id: 3, nombre: "RAM"}, 
// ]; 

// for (const producto of productos){
// console.log(producto.id)
// console.log(producto.nombre);}; 




//OTRA FORMA ES CON FUNCION CONST

// class Animales { 
//     constructor(name, amount, value){ 
//       this.name = name; 
//       this.amount = amount; 
//       this.value = value; 
//     }
//   }
  
//   const animales = []; 
  
//   animales.push (new Animales ("Cat", 3, "2000"));
//   animales.push (new Animales ("Dog", 2, "3000"));
//   animales.push (new Animales ("Horse", 5, "6000"));
  
//   console.table(animales);
  





  

// let year = prompt("¿En qué año ganó Argentina su última copa américa?"); 

// if (year == 2021){ 
//    alert("¡Correcto!"); 
// }else{ result = confirm ("¿Seguro?")}

// if (result === true){ alert ("Eso no es verdad!")}








//---------------------------------------------

const resta = (a,b) => a - b; 
console.log(resta(202,58));

const suma = (a, b, c) => a + b + c; 
console.log(suma(50,60,100));

const multiplicacion = (a, b, c) => a * b * c; 
console.log(multiplicacion(20, 15, 7));

const division = (a, b) => a / b; 
console.log(division(206, 21));



//---------------------------------------------

console.log(Math.max(50, 500, 12, 45));
console.log(Math.min(50, 500, 12, 45));
console.log(Math.PI);



//---------------------------------------------


let numero = "Ingrese un número"; 
let repeticiones = 0; 
let corte = 10; 
let detener = false; 

while (repeticiones <= numero && detener==false){ 

  if(repeticiones>corte){ 
    console.log("Se corta el ciclo");
    detener===true;
    break;
  }else
  { 
    console.log("El ciclo continua");
  }
}

y = 0;
x = 0;
while (y < 6) {
  y ++;
  x += y;

  console.log(y)
}



//---------------------------------------------


const array1 = [
  {producto: "1" ,nombre: "CPU", marca: "Ryzen"},
  {producto: "2" , nombre: "Mother", tamaño: "Medium"},
  {producto: "3", nombre: "GPU", tipo: "Nvidia"}, 
]

for(const productos of array1){ 
  console.log(productos);
}


//---------------------------------------------


class Stock{
  constructor(nombre, precio, cantidad){ 
  this.nombre = nombre; 
  this.precio = precio; 
  this.cantidad = cantidad; 
  }
 }

const array2 = []; 

array2.push (new Stock("CPU", "$40000", 2));
array2.push (new Stock("Mother", "$21000", 5));
array2.push (new Stock("GPU", "$80000", 3));

console.log(array2);

