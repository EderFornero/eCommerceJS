//Contacto
const contact = document.getElementById('contact');
contact.addEventListener('click', () => {
    Swal.fire(
        '¡Envíame tus dudas!',
        'ederfornero.ef@gmail.com',
        'info'
    );
});

const btnSwitch = document.getElementById('switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('darkMode');
    btnSwitch.classList.toggle('active');
})

//Search
const search = document.getElementById("search");
const btnSearch = document.getElementById('btnSearch');

btnSearch.addEventListener('click', () => {
    console.log(search.value);
    localStorage.setItem("btnSearch", JSON.stringify(search.value));
})

//Form---------------------------------------------------------------------------------------

let formInput = document.getElementById('formInput');
let form = document.getElementById("form");
form.addEventListener("submit", recognition);

function recognition(e) {
    e.preventDefault();

    console.log(formInput.value);
    //local storage user
    localStorage.setItem("user", JSON.stringify(formInput.value));


}

//User
const nameUser = document.getElementById("userUp");

const userJoin = document.querySelector('.usuarioIngresar');

const greeting = document.getElementById("greeting");

formInput.addEventListener("keydown", (e) => {
    e.key === "Enter" ? greeting.className = "oficialColor" : null;
    setTimeout(() => {
        greeting.classList.remove("oficialColor");
    }, 1000);
});

formInput.addEventListener("keyup", () => {
    nameUser.innerHTML = formInput.value;
});

nameUser.addEventListener('click', () => {
    nameUser.textContent === 'Usuario' ? alert('Porfavor ingrese nombre de usuario') : null;
})

//Stock---------------------------------------------------------------------------------------------
const containerProduct = document.getElementById("contenedor-productos");

//Carrito
let carrito = [];

let stockGPU = async () => {
    try {
        const resp = await fetch("./JSON/stockOficial.json");
        const data = await resp.json();

        data.forEach(producto => {

            const div = document.createElement("div")
            div.classList.add("producto")
            div.innerHTML = `
            <img class="img-producto" src =${producto.img} alt= ""> 
            <h3 class="nameProducto">${producto.name}</h3> 
            <p>Marca: ${producto.brand}</p>
            <p class="precioProducto">$${producto.price} USD</p>
            <button id = "agregar${producto.id}" class = "boton-agregar">Agregar<i class = "fas fa-shopping-cart"></i></button>
            `

            containerProduct.appendChild(div);


            const boton = document.getElementById(`agregar${producto.id}`);

            boton.addEventListener('click', addBotonClick)


        });

    } catch (error) {
        console.log("Error");
    }
}
stockGPU();



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
            let addElement = notDuplicate[
                i
            ].parentElement.parentElement.parentElement.querySelector(
                '.shoppingCartItemQuantity'
            );
            addElement.value++;
            $('.toast').toast('show');
            updateCart();
            return;
        }
    };

    //insercion del carrito
    const divCartRow = document.createElement('div');
    const divContent = `
<div class="row shoppingCartItem">
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
    localStorage.setItem(productTittle, JSON.stringify(divContent));
    divCartRow.innerHTML = divContent;
    divCart.appendChild(divCartRow);

    //boton eliminar
    divCartRow.querySelector('.buttonDelete').addEventListener(
        'click', removeProduct
    );

    //cantidad
    divCartRow
        .querySelector('.shoppingCartItemQuantity')
        .addEventListener('change', changeQuantity);

    //comprar
    buyButton.addEventListener('click', buyButtonClick);

    //actualizar carrito
    updateCart();

}

function updateCart() {
    let amount = 0;

    const shoppingCartTotal = document.querySelector(
        '.shoppingCartTotal'
    );


    const addItem = document.querySelectorAll(
        '.shoppingCartItem'
    );

    addItem.forEach((shoppingCart) => {

        //recoger el precio
        const cartPriceElement = shoppingCart.querySelector(
            '.shoppingCartItemPrice'
        );

        //sacar string
        const cartPriceNumber = parseFloat(
            cartPriceElement.textContent.replace('$', '')
        );

        //establecer cantidad
        const shoppingCartItemQuantity = shoppingCart.querySelector(
            '.shoppingCartItemQuantity'
        );

        const shoppingCartItemQuantityValue = parseFloat(
            shoppingCartItemQuantity.value
        );

        //total
        amount = amount + cartPriceNumber * shoppingCartItemQuantityValue;

    });

    shoppingCartTotal.innerHTML = `$${amount.toFixed(2)} USD`;
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



//Compra realizada
alertElementInCart = document.getElementById('alertElementInCart');

const div = document.createElement('div');

div.innerHTML = `<div class="modal fade" id="comprarModal" tabindex="-1" aria-labelledby="comprarModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="comprarModalLabel">ENCARGO RECOGIDO</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
        <div class="modal-body">
            <p>¡Muchas gracias por su compra!
               <strong>Pronto enviaremos su pedido</strong> 
            </p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary btnAceptar" data-dismiss="modal">Aceptar</button>
        </div>
    </div>
    </div>
</div>`;

alertBuy.appendChild(div);


//fetch 
const dataContainer = document.getElementById('contenedorDataStock')
const dataStock = async () => {
    try {
        const resp = await fetch("./JSON/dataStock.json");
        const data = await resp.json();

        data.forEach(prod => {
            const div = document.createElement('div')
            div.classList.add("producto")
            div.innerHTML = `
         <img class="img-producto" src =${prod.img} alt= ""> 
         <h3 class="nameProducto">${prod.name}</h3> 
         <p>Marca: ${prod.brand}</p>
         <p class="precioProducto">$${prod.price} USD</p>
         <button id="functionClick${prod.id}" class = "botonProximamente">Próximamente<i class = "fas fa-shopping-cart"></i></button>
         `


            dataContainer.append(div)

            const btn = document.getElementById(`functionClick${prod.id}`);

            btn.addEventListener('click', () => {
                Swal.fire({
                    icon: 'error',
                    title: '¡Alerta!',
                    text: 'Este artículo NO se encuentra en stock'
                })
            });
        });


    } catch (error) {
        console.log("¡ERROR! No se ha podido obtener los datos");
    }

};

dataStock();


//---------------------------------------------------------------------------------------------