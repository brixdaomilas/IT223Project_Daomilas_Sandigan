let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let payment = document.querySelector('.payment');
let submit = document.querySelector('.submit-btn')
const modal = document.getElementById('myModal');


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
        name: 'NIKE SB ZOOM BLAZER MID X MASON',
        image: 'nikeeeb.png',
        price: 6214
    },
    {
        id: 5,
        name: 'ADIDAS SUPERSTAR SHOES',
        image: 'blackad.png',
        price: 7999
    },
    {
        id: 6,
        name: 'ADIDAS CAMPUS 00S YNUK SHOES',
        image: 'ad.png',
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
            <div class="sec1"><img src="img/image/${value.image}"></div>
            <div class="title" id="name">${value.name}</div>
            <div class="sec2">
            <div class="price">₱${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})"><i class="fa-solid fa-bag-shopping"></i></button>
            </div>
            `;
        list.appendChild(newDiv);
    })
}

initApp();

function addToCard(key) {
    if (listCards[key] == null) {
      listCards[key] = JSON.parse(JSON.stringify(products[key]));
      listCards[key].quantity = 1;
      listCards[key].defaultPrice = products[key].price; // DEFAULT PRICE 
    }
    console.log(listCards);
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice += value.price;
        count += value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.classList.add('cartinfo');
            newDiv.innerHTML = `
                <div><img src="img/image/${value.image}"/></div>
                <div class="prodname">${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div class="sizebut" >
                    <select onchange="changeSize(${key}, this.value)">
                        <option value="38" ${value.size === '38' ? 'selected' : ''}>38</option>
                        <option value="39" ${value.size === '39' ? 'selected' : ''}>39</option>
                        <option value="40" ${value.size === '40' ? 'selected' : ''}>40</option>
                        <option value="41" ${value.size === '41' ? 'selected' : ''}>41</option>
                    </select>
                </div>
                    <div class="quantity-section">
                        <button id='leftbut' onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                        <div class="count">${value.quantity}</div>
                        <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                    </div>
                `;
            listCard.appendChild(newDiv);
            console.log(value.price)
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}



  
  function changeQuantity(key, quantity) {
    if (quantity == 0) {
      delete listCards[key];
    } else {
      listCards[key].quantity = quantity;
      listCards[key].price = quantity * products[key].price; // Update price based on quantity
    }
    reloadCard();
  }

total.onclick = () =>  {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    
    setTimeout(function() {
      overlay.style.display = "none";
      showModal();
    }, 2000);
  }

  function showModal() {
    modal.style.display = "block";
  }

  const receiptContainer = document.getElementById('receiptContainer');
  function checkOut() {
    overlay.style.display = "block";
    
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function showreceipt(){
    receiptContainer.style.display ="block";
    modal.style.display = "none";
    setTimeout(function() {
        const receipt = generateReceipt();
        receiptContainer.innerHTML = receipt;
      }, 1000);
    
  }

  function closereceipt(){
    receiptContainer.style.display = "none";
    location.reload();
  }


  function generateReceipt() {
    let receiptContent = '';
    let totalPrice = 0;
    let totalCount = 0;
  
    listCards.forEach((value) => {
      const itemTotal = value.defaultPrice * value.quantity; // Calculate item subtotal using default price and quantity
      receiptContent += `
        <div class="receipt-item">
          <div class="receipt-name">${value.name}</div>
          <div class="receipt-quantity">Quantity: ${value.quantity}</div>
          <div class="receipt-price">Price: ₱${value.defaultPrice.toLocaleString()}</div> <!-- Use default price here -->
          <div class="receipt-subtotal">Subtotal: ₱${itemTotal.toLocaleString()}</div> <!-- Use item subtotal here -->
        </div>
      `;
      totalPrice += itemTotal;
      totalCount += value.quantity;
    });
  
    const receipt = `
      <div class="receipt">
        <div class="receipt-header">
          <h2>Receipt</h2>
          <p>Date: ${new Date().toLocaleDateString()}</p>
          <span class="close" onclick="closereceipt()">&times;</span>
        </div>
        <div class="receipt-items">
          ${receiptContent}
        </div>
        <div class="receipt-total">
          <div class="receipt-total-quantity">Total Quantity: ${totalCount}</div>
          <div class="receipt-total-price">Total Price: ₱${totalPrice.toLocaleString()}</div>
        </div>
      </div>
    `;
    return receipt;
  }

 const sub = document.querySelector('.sub');
 





