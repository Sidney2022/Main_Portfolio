
// toggle dark mode
const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

// toggle dark mode 2
const switchElements = document.querySelector('.switches')

switchElements.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

// accordion
const accordion = document.getElementsByClassName
('content8x');

for (i = 0; i<accordion.length; i++){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}



// nav
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const menuItem = document.querySelectorAll(".menu-item");

// main toggle
menuBtn.addEventListener("click", () => {
  toggle();
});

// toggle on item click if open
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}


// nav footer
const menuBtni = document.querySelector(".menu_btn");
const menuItemsi = document.querySelector(".menu_items");
const menuItemi = document.querySelectorAll(".menu_item");

// main toggle
menuBtni.addEventListener("click", () => {
  toggle();
});

// toggle on item click if open
menuItemi.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtni.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtni.classList.toggle("open");
  menuItemsi.classList.toggle("open");
}

