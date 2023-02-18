function storeData(){    
    var userr=document.getElementById('userr')
    var name = document.getElementById('name')
    var pw = document.getElementById('password')
    if(name.value.length == 0){
        alert('Please fill in email')

    }else if(pw.value.length == 0){
        alert('Please fill in password')

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password')

    }else if(pw.value.length > 8){
        alert('Max of 8')

    }else{
        localStorage.setItem('userr',userr.value)
        localStorage.setItem('name', name.value)
        localStorage.setItem('password', pw.value)
        alert('Sign Up Successful')
        window.location.href = './login.html'
    }
}

//checking
function checkData(){
  
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('password');
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPassword');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
       
        window.location.href="./Home.html"
    }else{
        alert('wrong Credentials ');
    }
}