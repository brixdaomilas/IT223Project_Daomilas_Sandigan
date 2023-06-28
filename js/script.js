let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


const view = document.querySelector(".rowM");

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
      var src = image_1.getAttribute('src');
      document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
      var src = image_2.getAttribute('src');
      document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
      var src = image_3.getAttribute('src');
      document.querySelector('.big-image-3').src = src;
  });
});

document.querySelectorAll('.overlay-featured-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
      var src = image_1.getAttribute('src');
      document.querySelector('.overlay-big-image-1').src = src;
  });
});

document.querySelectorAll('.overlay-featured-image-2').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
      var src = image_1.getAttribute('src');
      document.querySelector('.overlay-big-image-2').src = src;
  });
});

document.querySelectorAll('.overlay-featured-image-3').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
      var src = image_1.getAttribute('src');
      document.querySelector('.overlay-big-image-3').src = src;
  });
});

document.querySelectorAll('.overlay-featured-image-4').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
      var src = image_1.getAttribute('src');
      document.querySelector('.overlay-big-image-4').src = src;
  });
});


document.querySelectorAll('.square').forEach((size) => {
  size.onclick = () => {
    const activeButton = document.querySelector('.square.active');
    if (activeButton) {
      activeButton.classList.remove('active');
      activeButton.style.background = '';
      activeButton.style.color = '';
    }
    size.classList.add('active');
    size.style.background = 'black';
    size.style.color = 'white';
    
    // Log the value of the chosen button as a string
    console.log(size.innerText.toString());
  };
});

let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.product .fbox').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});


document.querySelectorAll('#times').forEach(timesIcon => {
  timesIcon.onclick = () => {
    let previewContainer = timesIcon.closest('.products-preview');
    let activePreview = previewContainer.querySelector('.preview.active');
    if (activePreview) {
      activePreview.classList.remove('active');
    }
    previewContainer.style.display = 'none';
  };
});


let row = document.querySelectorAll('.rowM')
let overlay = document.getElementById("overlay");

document.querySelectorAll('.close').forEach((close) => {
  close.addEventListener('click', closeModal);
});

// document.querySelectorAll('.btn').forEach(button => {
//   button.onclick = () => {
//     // Show the overlay
//     overlay.style.display = 'block';
//     document.querySelector('.close').addEventListener('click', closeModal);

//     // Get the data-prod attribute value of the clicked button
//     let name = button.getAttribute('data-prod');
//     console.log(name);

//     // Find the specific rowM element based on data-tar attribute
//     let targetRow = document.querySelector('.rowM[data-tar="' + name + '"]');
//     console.log(targetRow)
//     if (targetRow) {
//       targetRow.classList.add('active');
//     }
//   };
// });

function closeModal() {
  // Your code here
  overlay.style.display = "none";
}

function filterRows(target) {
  const rows = document.getElementsByClassName('rowM');
  console.log(target)
  for (let i = 0; i < rows.length; i++) {
    const dataProd = rows[i].getAttribute('data-tar');
    if (dataProd === target) {
      console.log("run")
      rows[i].style.display = 'flex';
    } else {
      console.log("not")
      rows[i].style.display = 'none';
    }
  }
}

function openModal(target) {
  filterRows(target);
  document.getElementById('overlay').style.display = 'block';
}




document.addEventListener("DOMContentLoaded", function() {
  var addToCartBtn = document.querySelector(".btn");
  addToCartBtn.addEventListener("click", toggleCartNotification);

  const close = document.querySelector(".close");
  close.addEventListener("click", closeModal)

  function toggleCartNotification() {
    // Your code here
    var cartIcon = document.querySelector('.cart');
    var count = parseInt(cartIcon.getAttribute('data-count'));

    if (count === 0) {
      cartIcon.setAttribute('data-count', 1);
      cartIcon.classList.add('active');
      setTimeout(function() {
        cartIcon.classList.remove('active');
      }, 1000);
    } else {
      count++;
      cartIcon.setAttribute('data-count', count);
      cartIcon.classList.add('active');
      setTimeout(function() {
        cartIcon.classList.remove('active');
      }, 1000);
    }
  }

  
});

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 200,
})

sr.reveal('.home');
sr.reveal('.product');
sr.reveal('.featured');
sr.reveal('.blog');
sr.reveal('.news');