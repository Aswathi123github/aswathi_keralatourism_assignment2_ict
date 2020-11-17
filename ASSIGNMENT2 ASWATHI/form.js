const email = document.getElementById('email')
const password = document.getElementById('password')
const phone = document.getElementById('phone')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) =>{
let messages = []
if (email.value ==='' || name.value == null){
    messages.push('cannot be empty')
}
if(password.value.length <=6) {
    messages.push('password must be longer than 6 character')
}
if(password.value.length >=20){
    messages.push('password must be less than 20 characters')
}
if(phone.value.length >=10){
    messages.push('more than 10 digits')
}
if (messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(',')
}
})