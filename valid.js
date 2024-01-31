function store(){
    var mail = document.getElementById('mail');
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var phone = document.getElementById('phone');
    console.log("hi")

    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(mail.value.length == 0){
        alert('Please fill in email');

    }else if(pass1.value.length == 0 && pass2.value.length == 0){
        alert('Please fill in password');

    }else if(mail.value.length == 0 && (pass1.value.length == 0 || pass2.value.length == 0)){
        alert('Please fill in both email and password');
        
    }else if(pass1.value.length < 8){
        alert('Should be more than 8 characters');

    }else if(!pass1.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pass1.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pass1.value.match(lowerCaseLetters)){
        alert('please add 1 lowercase letter');

    }
    else if(pass1.value !== pass2.value){
        alert('Both passwords must be equal');
    }
    else if(phone.value.length>10 || phone.value.length<10){
        alert("Phone number must be at least 10 characters")
    }
    else{
        localStorage.setItem('mail', mail.value);
        localStorage.setItem('pass1', pass1.value);
        localStorage.setItem('phone', phone.value);
        alert('Your account has been created');
    }
    }