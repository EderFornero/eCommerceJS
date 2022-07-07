//Search
let search = document.getElementById("search");
search.addEventListener("keydown", (e) => {
    e.preventDefault();
    console.log(search);
})

//Formulario---------------------------------------------------------------------------------------

let formInput = document.getElementById('formInput');
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", reconocimiento);

function reconocimiento(e) {
    e.preventDefault();

    console.log(formInput.value);
    localStorage.setItem("user", JSON.stringify(formInput.value));


}

const saludo = document.getElementById("saludo");

formInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        saludo.className = "green";
    }

})

//Stock---------------------------------------------------------------------------------------------
const contenedorProductos = document.getElementById("contenedor-productosGPU");
const contenedorProductosCPU = document.getElementById("contenedor-productosCPU")
let stockGPU = [
    { id: "1", name: "GIGABYTE GEFORCE GTX 1660", brand: "Nvidia", price: "595,43", img: `./images/Productos/1660.jpg` },
    { id: "2", name: "GIGABYTE GEFORCE RTX 2070 SUPER WINDFORCE OC", brand: "Nvidia", price: "1000", img: `./images/Productos/2070.jpg` },
    { id: "3", name: "MSI Radeon RX 570 Armor ARMOR 8G OC", brand: "AMD", price: "714,52", img: `./images/Productos/570.webp` },
    { id: "4", name: "Sapphire Radeon RX 580 Nitro Plus", brand: "AMD", price: "952,69", img: `./images/Productos/580.jpg` },
];

let stockCPU = [
    { id: "1", name: "Ryzen 5 5600G", brand: "AMD", price: "276,47", img: `./images/Productos/AMD-5600g.jpg`},
    { id: "2", name: "Ryzen 5 5600X", brand: "AMD", price: "400,72", img: `./images/Productos/AMD-5600x.jpg`},
    { id: "4", name: "Core i5-10600KF", brand: "Intel", price: "308,64", img: `./images/Productos/CoreI5-10dc.jpg` },
    { id: "5", name: "Core i5-11600KF", brand: "Intel", price: "363,50", img: `./images/Productos/CPU-CoreI5-11va.webp`},
]


stockGPU.forEach((producto) => {
    const div = document.createElement("div")
    div.classList.add("producto")
    div.innerHTML = `
    <img class="img-producto" src =${producto.img} alt= ""> 
    <h3 class="nameProducto">${producto.name}</h3>
    <p>Marca: ${producto.brand}</p>
    <p class="precioProducto">$${producto.price}</p>
    `

    contenedorProductos.appendChild(div);
});

stockCPU.forEach((producto) => { 
    const div = document.createElement("div")
    div.classList.add("productoCPU")
    div.innerHTML = `
    <img class="img-producto" src =${producto.img} alt= ""> 
    <h3 class="nameProducto">${producto.name}</h3>
    <p>Marca: ${producto.brand}</p>
    <p class="precioProducto">$${producto.price}</p>
    `
  contenedorProductosCPU.appendChild(div);
   
})
//---------------------------------------------------------------------------------------------

//localStorage

localStorage.setItem("stock", JSON.stringify(stockGPU));


//--------------------------------------------------------------


