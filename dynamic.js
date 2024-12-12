const menu = document.querySelector('.sidebarmenu')
const open_btn = document.querySelector('#openmenu')
const close_btn = document.querySelector('#closemenu')

open_btn.addEventListener('click', function () {
  menu.classList.add('active')
})

close_btn.addEventListener('click', function () {
  menu.classList.remove('active')
})
