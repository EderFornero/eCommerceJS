
//Search
let search = document.getElementById("search");

search.addEventListener("keyup", () => {

    console.log(search.value)

});

//Form---------------------------------------------------------------------------------------

let formInput = document.getElementById('formInput');
let form = document.getElementById("form");
form.addEventListener("submit", recognition);

function recognition(e) {
    e.preventDefault();

    console.log(formInput.value);
    localStorage.setItem("user", JSON.stringify(formInput.value));


}

//User
const nombreUsuario = document.getElementById("userUp");
 
const greeting = document.getElementById("greeting");

formInput.addEventListener("keydown", (e) => {
    e.key === "Enter" ? greeting.className = "green" : null;
   
})
formInput.addEventListener("keyup", () => { 
    nombreUsuario.innerHTML = formInput.value; 
})
//Stock---------------------------------------------------------------------------------------------
const containerProduct = document.getElementById("contenedor-productos");
let stockGPU = [
    { id: "0", name: "GIGABYTE GEFORCE GTX 1660", brand: "Nvidia", amount: "1", price: 595.43, img: `./images/Productos/1660.jpg` },
    { id: "1", name: "GIGABYTE GEFORCE RTX 2070 SUPER WINDFORCE OC", brand: "Nvidia", amount: 1, price: 1000, img: `./images/Productos/2070.jpg` },
    { id: "2", name: "MSI Radeon RX 570 Armor ARMOR 8G OC", brand: "AMD", amount: "1", price: 714.52, img: `./images/Productos/570.webp` },
    { id: "3", name: "Sapphire Radeon RX 580 Nitro Plus", brand: "AMD", amount: "1", price: 952.69, img: `./images/Productos/580.jpg` },
    { id: "4", name: "GIGABYTE GEFORCE GTX 1060 6GB OC", brand: "Nvidia", amount: "1", price: 336.02, img: `./images/Productos/1060.jpg` },
    { id: "5", name: "Procesador Ryzen 5 5600G", brand: "AMD", amount: "1", price: 276.47, img: `./images/Productos/AMD-5600g.jpg` },
    { id: "6", name: "Procesador Ryzen 5 5600X", brand: "AMD", amount: "1", price: 400.72, img: `./images/Productos/AMD-5600x.jpg` },
    { id: "7", name: "Procesador Core i5-10600KF", brand: "Intel", amount: "1", price: 308.64, img: `./images/Productos/CoreI5-10dc.jpg` },
    { id: "8", name: "Procesador Core i5-11600KF", brand: "Intel", amount: "1", price: 363.50, img: `./images/Productos/CPU-CoreI5-11va.webp` },
];

//Carrito
let carrito = [];

const addCarrito = (prodId) => {
    const item = stockGPU.find((prod) => prod.id === prodId);
    carrito.push(item);
}

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

    containerProduct.appendChild(div);

    const boton = document.getElementById(`agregar${producto.id}`);

    boton.addEventListener('click', addBotonClick)
    addCarrito(producto.id);

});

//------------------------------------------------------------------------------


function addBotonClick(e) {
    const button = e.target;
    const product = button.closest('.producto');

    const productTittle = product.querySelector('.nameProducto').textContent;

    const productPrice = product.querySelector('.precioProducto').textContent;

    const productImage = product.querySelector('.img-producto').src;


    addToShoppingCart(productTittle, productPrice, productImage);
}

const buyButton = document.querySelector('.comprarButton');


const divCart = document.querySelector('.divCart');


function addToShoppingCart(productTittle, productPrice, productImage) {


    //funcion para no duplicar producto
    const notDuplicate = divCart.getElementsByClassName('shoppingCartItemTitle');

    for (let i = 0; i < notDuplicate.length; i++) {
        if (notDuplicate[i].innerText === productTittle) {
            //parentElement para saltar al div padre de arriba y poder traer el elemento requerido
            let addElement = notDuplicate[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
            addElement.value++;
            //agregar clase toast de bs
            updateCart();
            $('.toast').toast('show');
            return;
        };
    };

    //insercion del carrito
    const divCartRow = document.createElement('div');
    const divContent = `<div class="row shoppingCartItem">
    <div class="col-6">
        <div class="shopping-add-cart d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src=${productImage} class="shopping-cart-image">
            <h6 class="shopping-add-cart-title shoppingCartItemTitle text-truncate ml-3 mb-0">${productTittle}</h6>
        </div>
    </div>
    <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="productPrice mb-0 shoppingCartItemPrice">${productPrice}</p>
        </div>
    </div>
    <div class="col-4">
        <div
            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                value="1">
            <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
    </div>
</div>`;

    divCartRow.innerHTML = divContent;
    divCart.appendChild(divCartRow);

    //boton eliminar
    divCartRow.querySelector('.buttonDelete').addEventListener('click', removeProduct);

    //cantidad
    divCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', changeQuantity);

    buyButton.addEventListener('click', buyButtonClick);
    updateCart();
}

function updateCart() {
    let amount = 0;

    const cartAmount = document.querySelector('.cartAmount');

    const addItem = document.querySelectorAll('.shoppingCartItem');

    addItem.forEach((shoppingCart) => {

        //recoger el precio
        const cartPriceElement = shoppingCart.querySelector('.shoppingCartItemPrice');

        //sacar string
        const cartPriceNumber = Number(cartPriceElement.textContent.replace('$', ''));

        //establecer cantidad
        const shoppingCartItemQuantity = shoppingCart.querySelector('.shoppingCartItemQuantity').value;

        //total
        amount = amount + cartPriceNumber * shoppingCartItemQuantity;
        cartAmount.innerHTML = `$${amount}`;
    });

}

function removeProduct(e) {
    const removeClick = e.target;
    removeClick.closest('.shoppingCartItem').remove();
    updateCart();
}

function changeQuantity(e) {
    const changeClick = e.target;
    changeClick.value <= 0 ? changeClick.value = 1 : null;
    updateCart();
}

function buyButtonClick() {
    divCart.innerHTML = '';
    updateCart();
}


//---------------------------------------------------------------------------------------------

//localStorage

localStorage.setItem("stockGPU", JSON.stringify(stockGPU));

//--------------------------------------------------------------




