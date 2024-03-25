const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const inputEmail = form.elements.email;
const inputMessage = form.elements.message;

form.addEventListener('input', formHandleInput);
form.addEventListener('submit', formHandleSubmit);
const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

inputEmail.value = storageData.email || '';
inputMessage.value = storageData.message || '';

function formHandleInput() {
  const email = inputEmail.value.trim();
  const message = inputMessage.value.trim();
  const inputData = JSON.stringify({ email, message });
  localStorage.setItem(STORAGE_KEY, inputData);
}

function formHandleSubmit(event) {
  event.preventDefault();
  const email = inputEmail.value.trim();
  const message = inputMessage.value.trim();

  if (email && message) {
    console.log({ email, message });

    localStorage.removeItem(STORAGE_KEY);

    inputEmail.value = '';
    inputMessage.value = '';
  }
}
