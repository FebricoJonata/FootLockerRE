let subs = document.getElementById('form')

subs.addEventListener('submit', (e)=>{
    e.preventDefault()
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let phone = document.getElementById('phone')
    let country = document.getElementById('country')

    message.innerHTML =''

    //name
    if(name.value.length>30 || name.value.length<2){
        message.innerHTML='Name must be between 2 until 30 characters'
        return
    }
    
    //email
    if(!validasiEmail(email.value)){
        message.innerHTML = 'Email must include @ and .com'
        return
    }

    //phone number
    if(phone.value.length<10 ||  phone.value.length>13){
        message.innerHTML = 'Phone Number must be between 10 until 13 digits'
        return
    }

    //country
    if(!validasiCountry(country)){
        message.innerHTML = 'Please Select a Country'
        return
    }

    //terms
    if(!terms.checked){
        message.innerHTML='Please Agree With Terms and Conditions!'
        return
    }
})

function validasiEmail(email){
    return email.indexOf('@') != -1 && email.endsWith('.com')
}

function validasiCountry(country){
    if(country.selectedIndex == 0){
        return false
    }
    return true
}