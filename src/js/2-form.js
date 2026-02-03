formData = {
    email: "",
    message: "",
}
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');

const input = form.querySelector('input');
const textarea = form.querySelector('textarea');


form.addEventListener('input', onFormInput);
form.addEventListener('submit', handleSubmit);



function onFormInput(event) {
    if (event.target.name === "email"){
        formData.email = event.target.value;
    } else if ( event.target.name === "message"){
        formData.message = event.target.value;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


populateForm();
function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  
  try {
    const parsedData = JSON.parse(savedData);
    
    form.elements.email.value  = parsedData.email || '';
    form.elements.message.value = parsedData.message || '';
    
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    
  } catch (error) {
    console.error('Помилка парсингу даних:', error);
    localStorage.removeItem(STORAGE_KEY);
  }
}



function handleSubmit(event) {
  event.preventDefault();
  
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }
  
  console.log(formData);
  
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  
  // Очищаємо formData
  formData.email = '';
  formData.message = '';
}


//form.addEventListener('input', textareaInput);

//populateTextarea();

//function textareaInput (event) {
    //const message = event.target.value;
    //localStorage.setItem(STORAGE_KEY, message);
    //console.log(message);
    //console.log(email);
//}
//function populateTextarea() {
    //const newMessage = localStorage.getItem(STORAGE_KEY);
    //if (newMessage){
        //textarea.value = newMessage;
    //}

//}
//form.addEventListener('submit', handleSubmit);

//function handleSubmit(event) {
    //event.preventDefault();
    //event.currentTarget.reset();
    //localStorage.removeItem(STORAGE_KEY);
//}
//const feedback= "feedback-form-state";
//const message= ["luda", "oleg", "vlad", "alisa", "pusa"];
//localStorage.setItem(feedback, JSON.stringify(message)); 
//localStorage.setItem("number", 5);


//const value = localStorage.getItem(feedback);
//console.log(savedMessage);
//console.log(JSON.parse(value));
//localStorage.removeItem("number");
