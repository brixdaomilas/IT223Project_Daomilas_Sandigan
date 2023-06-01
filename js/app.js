let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let payment = document.querySelector('.payment');


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'ADIDAS FORUM 84',
        image: 'forum84adidas.png',
        price: 10928
    },
    {
        id: 2,
        name: 'ADIDAS CAMPUS 00S SHOES',
        image: 'adidasorange.png',
        price: 10241
    },
    {
        id: 3,
        name: 'NIKE AIR FORCE 1 LOW UNDERCOVER ',
        image: 'nikeviolet.png',
        price: 9532
    },
    {
        id: 4,
        name: 'NIKE SB ZOOM BLAZER MID X MASON SILVA',
        image: 'nikeblack.png',
        price: 6214
    },
    {
        id: 5,
        name: 'ADIDAS SUPERSTAR SHOES',
        image: 'adidasblack.png',
        price: 7999
    },
    {
        id: 6,
        name: 'ADIDAS CAMPUS 00S YNUK SHOES',
        image: 'adidasbrown.png',
        price: 11430
    },
    {
        id: 7,
        name: 'ADIDAS DUNK LOW RETRO PREMIUM',
        image: 'adidasblue.png',
        price: 11096
    },
    {
        id: 8,
        name: 'NIKE SB ZOOM NYJAH 3',
        image: 'nikepink.png',
        price: 11821
    },
    {
        id: 9,
        name: 'NIKE SB BLAZER LOW X DOYENNE',
        image: 'nikegreen.png',
        price: 8531
    },
    {
        id: 10,
        name: 'ADIDAS 3MC SHOES',
        image: '3mc1.png',
        price: 5018
    },
    {
        id: 11,
        name: 'ADIDAS SUPERSTAR SHOES',
        image: 'whiteadidas.png',
        price: 6691
    },
    {
        id: 12,
        name: 'FORUM LOW CLASSIC SHOES',
        image: 'peachadidas.png',
        price: 4460
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

let scrollpay = document.getElementById('payment');
total.onclick = () => {
    let anchor = document.createElement('a');
    payment.innerHTML = '';
    console.log("Utin")
    let newDiv = document.createElement('div');
    newDiv.innerHTML = 
  
    `<div class="container2">

        <form action="">

            <div class="rowCo">

                <div class="colCo">

                    <h3 class="title">billing address</h3>

                    <div class="inputBox">
                        <span>full name :</span>
                        <input type="text" placeholder="john deo">
                    </div>
                    <div class="inputBox">
                        <span>email :</span>
                        <input type="email" placeholder="example@example.com">
                    </div>
                    <div class="inputBox">
                        <span>address :</span>
                        <input type="text" placeholder="room - street - locality">
                    </div>
                    <div class="inputBox">
                        <span>city :</span>
                        <input type="text" placeholder="mumbai">
                    </div>

                    <div class="flex">
                        <div class="inputBox">
                            <span>state :</span>
                            <input type="text" placeholder="india">
                        </div>
                        <div class="inputBox">
                            <span>zip code :</span>
                            <input type="text" placeholder="123 456">
                        </div>
                    </div>

                </div>

                <div class="colCo">

                    <h3 class="title">payment</h3>

                    <div class="inputBox">
                        <span>cards accepted :</span>
                        <img src="img/card_img.png" alt="">
                    </div>
                    <div class="inputBox">
                        <span>name on card :</span>
                        <input type="text" placeholder="mr. john deo">
                    </div>
                    <div class="inputBox">
                        <span>credit card number :</span>
                        <input type="number" placeholder="1111-2222-3333-4444">
                    </div>
                    <div class="inputBox">
                        <span>exp month :</span>
                        <input type="text" placeholder="january">
                    </div>

                    <div class="flex">
                        <div class="inputBox">
                            <span>exp year :</span>
                            <input type="number" placeholder="2022">
                        </div>
                        <div class="inputBox">
                            <span>CVV :</span>
                            <input type="text" placeholder="1234">
                        </div>
                    </div>

                </div>
        
            </div>

            <input type="submit" value="proceed to checkout" class="submit-btn">

        </form>

    </div>`;

    payment.append(newDiv);
}