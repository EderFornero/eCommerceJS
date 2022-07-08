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
const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("carrito-contenedor");
//Carrito
let carrito = [];
let stockGPU = [
    { id: "0", name: "GIGABYTE GEFORCE GTX 1660", brand: "Nvidia", amount: "1", price: "595,43", img: `./images/Productos/1660.jpg` },
    { id: "1", name: "GIGABYTE GEFORCE RTX 2070 SUPER WINDFORCE OC", brand: "Nvidia", amount: "1", price: "1000", img: `./images/Productos/2070.jpg` },
    { id: "2", name: "MSI Radeon RX 570 Armor ARMOR 8G OC", brand: "AMD", amount: "1", price: "714,52", img: `./images/Productos/570.webp` },
    { id: "3", name: "Sapphire Radeon RX 580 Nitro Plus", brand: "AMD", amount: "1",  price: "952,69", img: `./images/Productos/580.jpg` },
    { id: "4", name: "Ryzen 5 5600G", brand: "AMD", amount: "1", price: "276,47", img: `./images/Productos/AMD-5600g.jpg` },
    { id: "5", name: "Ryzen 5 5600X", brand: "AMD", amount: "1", price: "400,72", img: `./images/Productos/AMD-5600x.jpg` },
    { id: "6", name: "Core i5-10600KF", brand: "Intel", amount: "1", price: "308,64", img: `./images/Productos/CoreI5-10dc.jpg` },
    { id: "7", name: "Core i5-11600KF", brand: "Intel", amount: "1", price: "363,50", img: `./images/Productos/CPU-CoreI5-11va.webp` },
];





stockGPU.forEach((producto) => {
    const div = document.createElement("div")
    div.classList.add("producto")
    div.innerHTML = `
    <img class="img-producto" src =${producto.img} alt= ""> 
    <h3 class="nameProducto">${producto.name}</h3>
    <p>Marca: ${producto.brand}</p>
    <p class="precioProducto">$${producto.price}</p>
    <button id = "agregar${producto.id}" class = "boton-agregar">Agregar<i class = "fas fa-shopping-cart"></i></button>
    `

    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`agregar${producto.id}`);

    boton.addEventListener('click', () => {
        addCarrito(producto.id)
    })
});


const addCarrito = (prodId) => {
    const item = stockGPU.find((prod) => prod.id === prodId);
    carrito.push(item);
    console.log(carrito);
}

const actualizarCarrito = () => { 
   contenedorCarrito.innerHTML = ""; 
  carrito.forEach((prod) => { 
    const div = document.createElement('div'); 
    div.className = ('productoEnCarrito'); 
    div.innerHTML = `
    <p> ${prod.name}</p>
    <p>Precio: ${prod.price}</p>
    <p>Cantidad: <span id= "cantidad" ${prod.amount}</span></p>
    <button onclick = "eliminarDelCarrito(${prod.id})" class = "boton-eliminar"><i class = "fas fa-trash-alt</i></button>
    `

    contenedorCarrito.appendChild(div); 
  })
}
//---------------------------------------------------------------------------------------------

//localStorage

localStorage.setItem("stockGPU", JSON.stringify(stockGPU));

//--------------------------------------------------------------


