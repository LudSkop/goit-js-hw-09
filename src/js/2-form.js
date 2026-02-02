formData = {
    email: "",
    message: "",
}

const formFech = document.querySelector('.feedback-form');
formFech.addEventListener('input', onFormInput);
function onFormInput (event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    
}
