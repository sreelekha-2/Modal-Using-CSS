let modal = document.getElementById('modal');

let openBtn = document.getElementById('openBtn');

let closeBtn = document.getElementById('closeBtn');

let text = document.getElementById('text');

let inputEle = document.getElementById('inputEle');

function getModal() {
  inputEle.value = text.textContent;
  modal.classList.remove('modal-container');
}

function closeModal() {
  modal.classList.add('modal-container');
}

function handler() {
  text.textContent = inputEle.value;
}

openBtn.addEventListener('click', getModal);

closeBtn.addEventListener('click', closeModal);

inputEle.addEventListener('keyup', handler);

window.onclick = function (e) {
  console.log(e.target);
  console.log(modal);
  if (e.target === modal) {
    console.log('true');
    closeModal();
  }
};
