let nameBtn = document.querySelector('.user-name-change-btn')
let userName = nameBtn.querySelector('.user-name')
let nameModal = document.querySelector('.user-name-modal')
let nameForm = nameModal.querySelector('#user-name-form')
let nameInput = nameModal.querySelector('#user-name-input')
let nameCancelBtn = nameModal.querySelector('.cancel-btn')
let nameSubmitBtn = nameModal.querySelector('.submit-btn')

let imgBtn = document.querySelector('.user-img-change-btn')
let userImg = imgBtn.querySelector('img')
let imgModal = document.querySelector('.user-img-modal')
let imgForm = imgModal.querySelector('#user-img-form')
let imgInput = imgModal.querySelector('#user-img-input')
let imgCancelBtn = imgModal.querySelector('.cancel-btn')
let imgSubmitBtn = imgModal.querySelector('.submit-btn')

let overlay = document.querySelector('.overlay')

const ACTIVE_CLASS = 'is-active'
const USER_NAME = 'userName'
const USER_IMG = 'userImg'

function makeNameModal() {
  nameModal.classList.add(ACTIVE_CLASS)
  overlay.classList.add(ACTIVE_CLASS)
}

function deleteNameModal() {
  nameModal.classList.remove(ACTIVE_CLASS)
  overlay.classList.remove(ACTIVE_CLASS)
}

function saveName(name) {
  localStorage.setItem(USER_NAME, name)
}

function paintName(name) {
  userName.innerHTML = name
}

function loadName() {
  const currentUserName = localStorage.getItem(USER_NAME)
  if (currentUserName !== null) {
    paintName(currentUserName)
  }
}

function submitName(evt) {
  const submitName = nameInput.value
  evt.preventDefault()

  if (submitName.trim() !== '') {
    deleteNameModal()
    paintName(submitName)
    saveName(submitName)
  } else {
    window.alert('사용자 이름을 입력해주세요.')
  }
}

function makeImgModal() {
  imgModal.classList.add(ACTIVE_CLASS)
  overlay.classList.add(ACTIVE_CLASS)
}

function deleteImgModal() {
  imgModal.classList.remove(ACTIVE_CLASS)
  overlay.classList.remove(ACTIVE_CLASS)
}

function saveImg(imgURL) {
  localStorage.setItem(USER_IMG, imgURL)
}

function paintImg(imgURL) {
  userImg.src = imgURL
}

function loadImg() {
  const currentImg = localStorage.getItem(USER_IMG)
  if (currentImg !== null) {
    paintImg(currentImg)
  }
}

function submitImg(evt) {
  evt.preventDefault()
  let fr = new FileReader()

  if (imgInput.value !== '') {
    fr.onload = function () {
      paintImg(fr.result)
      saveImg(fr.result)
    }
    fr.readAsDataURL(imgInput.files[0])

    deleteImgModal()
  } else {
    window.alert('이미지를 첨부해주세요.')
  }
}

function init() {
  nameBtn.addEventListener('click', makeNameModal)
  nameForm.addEventListener('submit', submitName)
  nameCancelBtn.addEventListener('click', deleteNameModal)
  loadName()

  imgBtn.addEventListener('click', makeImgModal)
  imgForm.addEventListener('submit', submitImg)
  imgCancelBtn.addEventListener('click', deleteImgModal)
  loadImg()
}

init()
