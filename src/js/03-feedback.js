import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".feedback-form input");
const message = document.querySelector(".feedback-form textarea");
const feedBackRef = localStorage.getItem('feedback-form-state');
const FEEDBACK = 'feedback-form-state';

let formData = localStorage.getItem(FEEDBACK)
    ? JSON.parse(feedBackRef) : {};

if (feedBackRef !== null) {
    const { email, message } = JSON.parse(feedBackRef);
    form.email.value = email ? email : '';
    form.message.value = message ? message : '';
}

form.addEventListener('submit', clearSubmitForm);
form.addEventListener('input', throttle(handleInput, 500));

function handleInput({ target }) {
    formData[target.name] = target.value;
    localStorage.setItem(FEEDBACK, JSON.stringify(formData));
}
function clearSubmitForm(event) {
    if (form.email.value === "" || form.message.value === "") {
        alert(`Warning! All fields must be filled!`);
        // event.currentTarget.reset();
    } else {
        console.log(JSON.parse(localStorage.getItem(FEEDBACK)));
        event.preventDefault();
        form.email.value = "";
        form.message.value = "";
        localStorage.removeItem(FEEDBACK);
        formData = {};
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

