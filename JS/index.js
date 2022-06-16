

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

function suma (a, b){ 
    let resultado = a + b;
    return resultado; 
}


//FUNCION SIN RETURN = ARROW 

const resta = (a,b) => a - b; 

console.log(resta(4,2));



//FUNCION A ENTREGAR 

//DESCRIPCION = ES UNA FUNCION QUE CONSTA DE UNA COMPRA DE 2 PRODUCTOS CON UN DESCUENTO 

const multiplicacion = (a , b) => a * b; 
const cantidadProducto = (a , b) => a - b; 


let precioProducto = 2000; 
let descuento = 350; 
let cantidadCompra = 2; 

let total = cantidadProducto(multiplicacion(precioProducto,cantidadCompra),descuento);

total = cantidadProducto((2000 * 2), 300); 

/* 
    let total = cantidadProducto(multiplicacion(2000 * 2),descuento);
    let total = cantidadProducto(4000, descuento);
    let total = cantidadProducto(4000, 350); 
    let total = 4000 - 350; 
    let total = 3650;  
);

*/ 


//LLEGAR AL RESULTADO FINAL DE UN VIDEOJUEGO CON IMPUESTO EN EL PAGO

const oferta = (a , b, c) => a * b / c; 
const impuesto = x => 1.65 * x ; 

let videojuego = 1370;
let ofertaPorcentaje = 30; 
let valorC = 100; 

let resultado = impuesto(oferta(videojuego, ofertaPorcentaje, valorC))
    
    resultado = impuesto (oferta(1370, ofertaPorcentaje, valorC));
    resultado = impuesto (oferta(1370 * 30, valorC));
    resultado = impuesto (oferta(1370 * 30 / 100));
    resultado = impuesto (oferta(41.100 / 100));
    resultado = impuesto (oferta (411)); 
    resultado = 1.65 * 411; 
    resultado = 678,15; 








