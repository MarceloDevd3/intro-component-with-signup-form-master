const form = document.querySelector('form') 


const name = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', (e) => {
 e.preventDefault()
 inputValidate();
})

function inputValidate() {
 const nameValue = name.value.trim()
 const lastNameValue = lastName.value.trim()
 const emailValue = email.value.trim()
 const passwordValue = password.value.trim()
 const input = document.querySelector('input')
 const errorIcon = document.querySelector('i')


 if (nameValue === '') {
  setErrorFor(name, 'First name cannot be empty');     
 } else {
   setSuceeFor(name);
 }


 if (lastNameValue === '') {
  setErrorFor(lastName, 'Last name cannot be empty');
 } else {
   setSuceeFor(lastName);
 }

 if (emailValue === '') {
  setErrorFor(email, 'Email cannot be empty');
 } else {
   setSuceeFor(email);
 }

 if (passwordValue  === '') {
  setErrorFor(password, 'Email cannot be empty');
 } else {
   setSuceeFor(password);
 }






 function  setErrorFor(input, message) {
   const labelmsg = input.parentElement;
   const small = labelmsg.querySelector('.small');
   input.classList.add('red-line')
   small.innerText = message;
   labelmsg.className = 'form-control error'
   input.classList.add('red-line')
  

 }

 function   setSuceeFor(input,message) {
   const labelmsg = input.parentElement;
   labelmsg.className = ''
   const small = labelmsg.querySelector('.small');
   small.innerText = '';
   input.classList.add('green-line')
   input.classList.remove('red-line')
  input.classList.add('sucess-line')
 }


}
