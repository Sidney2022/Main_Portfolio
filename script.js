const switchModes = document.querySelector('.switch')
const main = document.querySelector('main')
const sideBar = document.querySelector('.sidebar')
const mainContent = document.querySelector('.main_section')
const navBar = document.querySelector('.navbar')

switchModes.addEventListener('click', () => {
  switchModes.classList.toggle('active')
  main.classList.toggle('active')
  sideBar.classList.toggle('active')
  mainContent.classList.toggle('active')
  navBar.classList.toggle('active')
})