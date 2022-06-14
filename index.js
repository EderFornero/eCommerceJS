

// for (desde; hasta; actualizacion;){}

// ESTRUCTURA CON FOR 

for (let i = 1; i <=10; i++){ 
    if(i === 6){ 
        break
    }
    console.log(i);
}

for (let i = 1; i <=10; i++){ 
    if(i === 6){ 
        continue
    }
    console.log(i);
}


// ESTRUCTURA CON WHILE 

let cuenta = parseInt(prompt("Ingrese su numero de cuenta"));
let intentos = 0; 

while(cuenta != "02"){ 
    alert("Cuenta no registrada"); 

    if(intentos === 3){ 
      break; 
    }

    intentos++
    prompt("Ingrese su numero de cuenta")
}

if(intentos === 3){
    alert("Vuelva a intentar en 5 minutos");
    prompt("Ingrese su numero de cuenta"); 
}else(
    alert("Cuenta registrada")
);