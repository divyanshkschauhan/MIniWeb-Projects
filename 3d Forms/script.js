const signup_button = document.querySelector('.signup-button');
const signin_button = document.querySelector('.signin-button');
const form_wrapper = document.querySelector('.form-wrapper');

signup_button.addEventListener("click", (e) => {
    e.preventDefault();
    form_wrapper.classList.add("change");
});

signin_button.addEventListener("click", (e) => {
    e.preventDefault();
    form_wrapper.classList.remove("change");
});
