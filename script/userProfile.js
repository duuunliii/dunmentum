let userNameBtn = document.querySelector('.user-name-change-btn')
let userNameModal = document.querySelector('.user-name-modal')

let userImgBtn = document.querySelector('.user-img-change-btn')
let userImgModal = document.querySelector('.user-img-modal')

let cancelBtn = document.querySelectorAll('.cancel-button')
let imgCancelBtn = cancelBtn[0]
let nameCancelBtn = cancelBtn[1]

let overlay = document.querySelector('.overlay')

const ACTIVE_CLASS = 'is-active'

function handleNameModal() {
  userNameModal.classList.add(ACTIVE_CLASS)
  overlay.classList.add(ACTIVE_CLASS)
}

function handleImgModal() {
  userImgModal.classList.add(ACTIVE_CLASS)
  overlay.classList.add(ACTIVE_CLASS)
}

function deleteNameModal() {
  userNameModal.classList.remove(ACTIVE_CLASS)
  overlay.classList.remove(ACTIVE_CLASS)
}

function deleteImgModal() {
  userImgModal.classList.remove(ACTIVE_CLASS)
  overlay.classList.remove(ACTIVE_CLASS)
}

userNameBtn.addEventListener('click', handleNameModal)
nameCancelBtn.addEventListener('click', deleteNameModal)

userImgBtn.addEventListener('click', handleImgModal)
imgCancelBtn.addEventListener('click', deleteImgModal)