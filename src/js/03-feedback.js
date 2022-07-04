import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".feedback-form input");
const message = document.querySelector(".feedback-form textarea");
const feedBackRef = localStorage.getItem('feedback-form-state');
const state = feedBackRef ? JSON.parse(feedBackRef) : {};
console.log(state);
if (feedBackRef !== null) {
    const { email, message } = JSON.parse(feedBackRef);
    form.email.value = email ? email : '';
    form.message.value = message ? message : '';
} if (feedBackRef === null) {
    return alert("Заполни все поля");
}

email.addEventListener('input', throttle(handleInput,500))
message.addEventListener('input', throttle(handleInput,500))
form.addEventListener('submit', clearSubmitForm)

function handleInput({target}) {
    state[target.name] = target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(state))
}

function clearSubmitForm(e){
    e.preventDefault()
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')))  
    localStorage.removeItem('feedback-form-state')
    form.email.value = "";
    form.message.value = "";
}
// const LOCALSTORAGE_KEY = "goit-example-message";

// updateOutput();
// form.addEventListener("submit", saveMessage);

// function saveMessage(evt) {
//   evt.preventDefault();
//   localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//   updateOutput();
//   form.reset();
// }

// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
// }
