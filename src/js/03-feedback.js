import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';


const LOCAL_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const inputt = document.querySelector('.email')
const submit = document.querySelector ('.submit')
inputt.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);
let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
reloadPage();
function onFormSubmit(e) {
  e.preventDefault();
  
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
    dataForm = {};
    console.log({ email: email.value, message: message.value });
}


function onInputData(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

