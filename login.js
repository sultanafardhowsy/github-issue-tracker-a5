

document.getElementById('login-btn').addEventListener('click',function(){
const inputNumber = document.getElementById("user-name");
const number = inputNumber.value ;
console.log(number);

const inputPin = document.getElementById("password-pin");
const pin = inputPin.value;
console.log(pin);
if( number == 'admin' && pin == 'admin123'){
    alert('success');
    window.location.assign("home.html")
}
else alert("login failed");

})
