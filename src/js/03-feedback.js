import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".feedback-form input");
const message = document.querySelector(".feedback-form textarea");
const userData = document.querySelectorAll("input");
const feedBackRef = localStorage.getItem('feedback-form-state');
const formData = {};
const state = localStorage.getItem('feedback-form-state')
    ? JSON.parse(feedBackRef) : formData;

if (feedBackRef !== null) {
    const { email, message } = JSON.parse(feedBackRef);
    form.email.value = email ? email : '';
    form.message.value = message ? message : '';
}


form.addEventListener('submit', clearSubmitForm);
form.addEventListener('input', throttle(handleInput, 500));

function handleInput({ target }) {

    state[target.name] = target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(state));
}

function clearSubmitForm(event) {
    if (form.email.value === "" || form.message.value === "") {
        alert(`Warning! All fields must be filled!`);
        event.currentTarget.reset();
    } else {   
        event.preventDefault();
        console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
        localStorage.removeItem('feedback-form-state');
        form.email.value = "";
        form.message.value = "";
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

