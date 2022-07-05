import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".feedback-form input");
const message = document.querySelector(".feedback-form textarea");
const feedBackRef = localStorage.getItem('feedback-form-state');
const state = feedBackRef ? JSON.parse(feedBackRef) : {};

if (feedBackRef !== null) {
    const { email, message } = JSON.parse(feedBackRef);
    form.email.value = email ? email : '';
    form.message.value = message ? message : '';
} 
email.addEventListener('input', throttle(handleInput, 500));
message.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', clearSubmitForm);

function handleInput({target}) {
    state[target.name] = target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(state));
}

function clearSubmitForm(event){
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));  
    localStorage.removeItem('feedback-form-state');
    form.email.value = "";
    form.message.value = "";
}
// <--------------------Чернетка---->
// <-------------Перевірка вводу---------------------------->
// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const {
//         elements: { email, password}
//     } = event.currentTarget;
//     if (form.email.value === "" || form.message.value === "") {
//         return alert(`Warning! All fields must be filled!`);
//     } 
//     console.log("Email:", form.email.value, "Password:", form.message.value);
//     event.currentTarget.reset();
// };
// <----------------------------------------------------->

