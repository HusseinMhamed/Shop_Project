
const registerbtn=document.getElementById("registerbtn")
var registermail=document.getElementById("registermail")
var registerpassword=document.getElementById("registerpassword")
var registerusername=document.getElementById("registerusername")
var logindata = [
        { id: 0, email: "user@gmail.com", password: "user", username: "user" },
        { id: 1, email: "user1@gmail.com", password: "user1", username: "user1" }
        ];

function register(event){
    event.preventDefault();
    var enteredEmail = registermail.value.trim();
    var enteredPassword = registerpassword.value.trim();
    var enteredusername = registerusername.value.trim();
    var link= "@gmail.com"
    var p=false
    var ch=false
    var Rex = /\w{3,}@\w{2,}.\w{2,}/i;


    var storeagdata = JSON.parse( localStorage.getItem("arraykey"))
    if(storeagdata){
    var storeagdata = JSON.parse( localStorage.getItem("arraykey"))
    }
    else{
        storeagdata=logindata
    }
    if( enteredEmail == "" || enteredPassword =="" || enteredusername==""){
        alert("you must fill all")
    }
    else if(!Rex.test(enteredEmail)){
        alert("enter correct mail")
    }
    else if(storeagdata){
        storeagdata.forEach(element => {
            if(element.username==enteredusername || element.email==enteredEmail){
              p=true
            }
           
        });
        
        if(p){alert("this data laready exist")}
        else{var lastid= storeagdata.length
            var newop= {id:lastid, email:enteredEmail,password:enteredPassword, username : enteredusername}
            storeagdata.push(newop)
            var storedata= JSON.stringify(storeagdata)
            localStorage.setItem("arraykey",storedata)
            ch=true
        }
           if(ch) {
            alert("You have successfully registered, now log in")
            location.href="login.html"}
    }
    
        }
        registerbtn.addEventListener('click' ,register)

