const buyBtn = document.querySelector('.btn_buy');
const infoForm = document.querySelector('.user_info');
const submitBtn = document.querySelector('.btn_confirm');
const formUser = document.querySelector('.user_info');
const outputDiv = document.querySelector('.output');
const pib = document.querySelector('.pib');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');

const regexPib = /[A-Z][a-z]{1,} [A-Z][a-z]{1,} [A-Z][a-z]{1,}/;
const regexPhone = /^\+?[0-9()-]{10,}$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;




buyBtn.addEventListener('click', function(){
    infoForm.style.display = 'block';
})

formUser.addEventListener('submit', function(event){

    event.preventDefault(); 

    const formData = new FormData(this); 
    const formObj = {}; 

    formData.forEach(function(value, key){
        formObj[key] = value;
    })


    if(validate(formObj)) {
        let outputStr = "";
        for (const key in formObj) {
            if (formObj.hasOwnProperty(key)) {
                outputStr += key + ": " + formObj[key] + "\n";
            }
        }
        outputDiv.innerText = outputStr;
    }
 
});

function validate(object){
    let isValid = true;
    if(!object.pib){
        document.querySelector('.valid_fn').style.display = 'block'; 
        isValid = false; 
    } else {
        document.querySelector('.valid_fn').style.display = 'none'; 
    }
    if(!object.select_city){
        document.querySelector('.valid_s').style.display = 'block'; 
        isValid = false; 
    } else {
        document.querySelector('.valid_s').style.display = 'none'; 
    }
    if(!object.NP){
        document.querySelector('.valid_NP').style.display = 'block';
        isValid = false; 
    } else {
        document.querySelector('.valid_NP').style.display = 'none';
    }
    if(!object.quantity || object.quantity <= 0 ){
        document.querySelector('.valid_quantity').style.display = 'block'; 
        isValid = false; 
    } else {
        document.querySelector('.valid_quantity').style.display = 'none';
    }
    if(!object.select_payment){
        document.querySelector('.valid_pay').style.display = 'block'; 
        isValid = false; 
    } else {
        document.querySelector('.valid_pay').style.display = 'none'; 
    }
    return isValid;
}

function validateField(event, regex, errorClass){
    const isValid = regex.test(event.target.value);

    if(isValid){
        document.querySelector(errorClass).style.display = 'none';
    } else {
        document.querySelector(errorClass).style.display = 'block';
    }
}

pib.addEventListener('input', (event) => {
  validateField(event, regexPib, '.valid_fn');
});

phone.addEventListener('input', (event) => {
  validateField(event, regexPhone, '.valid_phone');
})

email.addEventListener('input', (event)=> {
  validateField(event, regexEmail, '.valid_email');
})

