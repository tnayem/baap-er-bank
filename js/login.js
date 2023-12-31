document.getElementById('submit-btn').addEventListener('click',function(){
    const email = document.getElementById('email-field').value;
    
    const password = document.getElementById('password-field').value;
    if(email==='tasdidnayem@gmail.com' && password==='1111'){
        window.location.href = "bank.html";
    }else{
        console.log('Unvalid User');
    }
})