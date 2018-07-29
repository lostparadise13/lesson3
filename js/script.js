window.addEventListener('DOMContentLoaded', function() {
//Get information for work
let products = document.querySelectorAll('.product'),
    buttons = document.getElementsByTagName('button'),
    open = document.getElementsByClassName('open')[0];
//function for create the Cart   
    function createCart() {
        //create elements for Cart
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            close = document.createElement('button');
        //Added classes for element cart
        cart.classList.add('cart');
        field.classList.add('cart-field');
        close.classList.add('close');
        // Added text for element
        close.textContent = 'Закрыть';
        heading.textContent = "В нашей корзине:";
        //Added cart to body
        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(close);

    }
    createCart();

    let field = document.querySelector('.cart-field'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.close');
    //Вешаем обработчик событий на каждую кнопку
    for (let i = 0; i < buttons.length - 1; i++) {
        buttons[i].addEventListener('click', function(){
            //Создаем копию карточки товара
            let item = products[i].cloneNode(true),
                btn = item.querySelector('button');

            btn.remove();
            field.appendChild(item);
            products[i].remove();
        })
    }


    function openCart() {
        cart.style.display = 'block'
    };

    function closeCart() {
        cart.style.display = 'none'
    };
    open.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);



});