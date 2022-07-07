

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

let stockProductos = [
    { id: "1", name: "GIGABYTE GEFORCE GTX 1660", brand: "Nvidia", price: "595,43", img: `./images/Productos/1660.jpg` },
    { id: "2", name: "GIGABYTE GEFORCE RTX 2070 SUPER WINDFORCE OC", brand: "Nvidia", price: "1000", img: `./images/Productos/2070.jpg` },
    { id: "3", name: "MSI Radeon RX 570 Armor ARMOR 8G OC", brand: "AMD", price: "714,52", img: `./images/Productos/570.webp` },
    { id: "4", name: "Sapphire Radeon RX 580 Nitro Plus", brand: "AMD", price: "952,69", img: `./images/Productos/580.jpg` },
    { id: "5", name: "GIGABYTE GEFORCE RTX 2080 SUPER WINDFORCE OC", brand: "Nvidia", price: "1032,08", img: `./images/Productos/2080.jpg` },
    { id: "6", name: "MSI GeForce GTX 1050 Ti Gaming X 4G", brand: "Nvidia", price: "541,44", img: `./images/Productos/1050ti.jpg` },

];


stockProductos.forEach((producto) => {
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

//---------------------------------------------------------------------------------------------

//localStorage

localStorage.setItem("stock", JSON.stringify(stockProductos));


//--------------------------------------------------------------


