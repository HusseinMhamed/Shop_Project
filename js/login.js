



var loginmail=document.querySelector("#loginmail")
var loginPass= document.getElementById("loginpass")
var loginbtn=document.getElementById('loginbtn')

// console.log(loginmail ,loginbtn)



function check(event){
    event.preventDefault();
    var enteredusername=loginmail.value.trim()
    var enteredPassword= loginPass.value.trim()
    var storeagdata = JSON.parse( localStorage.getItem("arraykey"))
    var p=false
    var storeuser
    if(storeagdata){
        storeagdata.forEach(element => {
            if(element.username==enteredusername && element.password==enteredPassword){
              p=true
              storeuser=element.username
            }
           
        });
        if(p){
            location.href="Shop.html"
            localStorage.setItem("storeduser",storeuser)
        }
        else{alert("incorrect username or Password")}
    }
    else{
        alert("you must register first")
    }
    
}
loginbtn.addEventListener('click', check)
//////////////////////////////////////////////////////////////////////////////////////

