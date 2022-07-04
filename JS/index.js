
let year = prompt("¿En qué año ganó Argentina su última copa américa?"); 

if (year == 2021){ 
   alert("¡Correcto!"); 
}else{ result = confirm ("¿Seguro?")}

if (result === true){ alert ("Eso no es verdad!")}








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

