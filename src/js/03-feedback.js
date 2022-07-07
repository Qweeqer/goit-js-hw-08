import throttle from 'lodash.throttle';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector(".feedback-form");
const email = document.querySelector(".feedback-form input");
const message = document.querySelector(".feedback-form textarea");
const feedBackRef = localStorage.getItem('feedback-form-state');
const FEEDBACK = 'feedback-form-state';
// Notiflix.Notify.failure('Qui timide rogat docet negare');
// Notiflix.Notify.success('Sol lucet omnibus');
let formData = localStorage.getItem(FEEDBACK)
    ? JSON.parse(feedBackRef) : {};

if (feedBackRef !== null) {
    const { email, message } = JSON.parse(feedBackRef);
    form.email.value = email ? email : '';
    form.message.value = message ? message : '';
}

form.addEventListener('submit', throttle(clearSubmitForm, 500));
form.addEventListener('input', throttle(handleInput, 500));

function handleInput({ target }) {
    formData[target.name] = target.value;
    localStorage.setItem(FEEDBACK, JSON.stringify(formData));
}
function clearSubmitForm(event) {
    event.preventDefault();
    if (form.email.value === "" || form.message.value === "") {
        Notify.failure('Warning! All fields must be filled!');
        // alert(`Warning! All fields must be filled!`);
        // event.currentTarget.reset();
    } else {        
        console.log(JSON.parse(localStorage.getItem(FEEDBACK)));
        event.preventDefault();
        form.email.value = "";
        form.message.value = "";
        localStorage.removeItem(FEEDBACK);
        formData = {};
        Notify.success("Thank you!");
    }
}

// <--------------------Чернетка---->

// <-------------Перевірка вводу---------------------------->
// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const {
//         elements: { email, message}
//     } = event.currentTarget;
//     if (form.email.value === "" || form.message.value === "") {
//         return alert(`Warning! All fields must be filled!`);        
//     } else {
//         console.log("Email:", form.email.value, "Message:", form.message.value);
//         event.currentTarget.reset();
//     }
// };
// <----------------------------------------------------->

