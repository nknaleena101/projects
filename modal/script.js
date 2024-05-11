const openModal = document.querySelector('#openModal');
const modalElement = document.querySelector('.modal');
const closeBtn = document.querySelector('.uil-times');

openModal.addEventListener('click', () =>{
  modalElement.classList.add('open');
})
closeBtn.addEventListener('click', () => {
  modalElement.classList.remove('open')
})