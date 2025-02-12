gologin=document.getElementById("gologin")
goregister=document.getElementById("goregister")
var storeduser=localStorage.getItem("storeduser")
var userinfo=document.getElementById("userinfo")
var logout=document.getElementById("gologout")
var Shoppingcard=document.getElementById("ShoppingCart")
var cardnum=document.querySelector(".dropdown span")
var arrr=JSON.parse(localStorage.getItem("arraykey")) || []
var clickdown= document.querySelector(".cards_products")
gologin.addEventListener("click",()=>{
    window.location.href="login.html"
})
goregister.addEventListener("click",()=>{
    window.location.href="register.html"
})
logout.style.display="none"
if(storeduser){
    gologin.remove()
    goregister.remove()
    userinfo.innerHTML="welcome "+storeduser
    userinfo.style.display="block"
    logout.style.display="block"
    Shoppingcard.style.display="block"
    cardnum.style.display="block"
}
logout.addEventListener("click",()=>{
    localStorage.removeItem("storeduser")
    window.location.reload()
    logout.style.display="none"
    Shoppingcard.style.display="none"
    cardnum.style.display="none"
    clickdown.style.display="none"
})
var container = document.getElementById("container");
var products=[
    {
        id:0,
        name:"Logitech G432",
        price:200,
        img:"images/Logitech_g432.jpg"
    },
    {
        id:1,
        name:"classic office",
        price:200,
        img:"images/download.jpg"
    },
    {
        id:2,
        name:"gaming office",
        price:200,
        img:"images/download2.jpg"
    },
    {
        id:3,
        name:"odyssey-G7",
        price:200,
        img:"images/Odyssey-G7_main1.jpg"
    },
    {
        id:4,
        name:"gaming case",
        price:200,
        img:"images/gaming_case.webp"
    },
    {
        id:5,
        name:"logitech G935",
        price:200,
        img:"images/g935.jpg"
    },
    {
        id:6,
        name:"Gaming desktop pc",
        price:200,
        img:"images/gaming-desktop-pc.jpg"
    },
    {
        id:7,
        name:"Gaming case",
        price:200,
        img:"images/gaming_case.webp"
    },
    {
        id:8,
        name:"Gaming monitor",
        price:200,
        img:"images/monitor.jpg"
    }
]
var x;
function drow(){
    container.innerHTML=""
    let addednewItem =  JSON.parse(localStorage.getItem(storeduser + "_cart")) || []
    // console.log(addednewItem)
    for(key in addednewItem){
        y = products.map((product)=>{
            if(key==product.name){
                return (
                    `
                    <div class="card col-lg-3 col-md-4 col-sm-6 m-3" style="width: 18rem;">
                    <img src="${product.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a class="btn btn-danger" id="addcard" onclick="removeitem('${product.name}')">Remove from cart</a>
                    <a style="float: right; font-size: larger;"><i class="far fa-heart"></i></a>
                    </div>
                    </div>
                    `)
            }
        })
        // console.log(y)
        container.innerHTML+=y.join('')
    } 
}
    drow()
    function removeitem(item){
        console.log(item)
        let addednewItem =  JSON.parse(localStorage.getItem(storeduser + "_cart")) || [] ;
        for(key in addednewItem){
            if(key==item){
                    delete addednewItem[key]
                localStorage.setItem(storeduser + "_cart", JSON.stringify(addednewItem))
            }
        }
        drow()
        card()
    };function reduce(item){
        let addednewItem =  JSON.parse(localStorage.getItem(storeduser + "_cart")) || [];
        for(let key in addednewItem){
            if(key === item){
                if(addednewItem[key].quantity > 1){
                    addednewItem[key].quantity--;
                } else {
                    delete addednewItem[key]; 
                }
                localStorage.setItem(storeduser + "_cart", JSON.stringify(addednewItem));
                card(); 
                drow();
                break; 
    
            }
        }
    }
    function add(item){
        let addednewItem =  JSON.parse(localStorage.getItem(storeduser + "_cart")) || [];
        for(let key in addednewItem){
            if(key === item){
                addednewItem[key].quantity++;
                localStorage.setItem(storeduser + "_cart", JSON.stringify(addednewItem));
                card(); 
                break; 
            }
        }
    }
    
   


var addcard=document.querySelectorAll("#addcard")



function addtocard(id) {
    if (!storeduser) {
        alert("Please log in to add items to your cart.");
        return;
    }

    var userCart = JSON.parse(localStorage.getItem(storeduser + "_cart")) || {};
    var productExists = false;

    for (var key in userCart) {
        if (userCart.hasOwnProperty(key)) {
            if (userCart[key].id === id) {
                userCart[key].quantity++;
                productExists = true;
                break;
            }
        }
    }

    if (!productExists) {
        var productToAdd = products.find(product => product.id === id);
        if (productToAdd) {
            userCart[productToAdd.name] = { id: productToAdd.id, quantity: 1 };
        }
    }

    localStorage.setItem(storeduser + "_cart", JSON.stringify(userCart));
    card()
}

var searchinput= document.getElementById("search");
var searchbtn= document.getElementById("searchbtn");
searchbtn.addEventListener("click",search)

function search(e){

    e.preventDefault();
    if(searchinput.value==""){
        alert("please enter a product name")
    }
    else{
    container.innerHTML=""
    console.log(searchinput.value)
    y=products.map(element => {
        
        if(element.name==searchinput.value){
            return (
                `
                <div class="card col-lg-3 col-md-4 col-sm-6 m-3" style="width: 18rem;">
                <img src="${element.img}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a  class="btn btn-primary" id="addcard" onclick="addtocard(${element.id})">Add to cart</a>
                <a  style="float: right; font-size: larger;"><i class="far fa-heart"></i></a>
                </div>
                </div>
                `)
        }
        container.innerHTML=y.join('')
    })};
}

var reset= document.getElementById("reset")
reset.addEventListener("click",()=>{
    window.location.reload()
    drow()
})



// //////////////////////////////////////////card ////////////////////////////////

let cartsproductsDiv = document.querySelector(".cards_products div")
function card(){
    cartsproductsDiv.innerHTML = '';
let badge = document.querySelector("#CartCount")
let num=0
// console.log(badge)
// console.log(cartsproductsDiv)
let addednewItem =  JSON.parse(localStorage.getItem(storeduser + "_cart")) || []
    // console.log(addednewItem)
if (addednewItem) {
    for (let key in addednewItem) {

    
        cartsproductsDiv.innerHTML += `<p>${key} - Quantity: ${addednewItem[key].quantity} &nbsp &nbsp <i class="fas fa-plus-square" onclick="add('${key}')" ></i> &nbsp &nbsp <i class="fas fa-minus-square " onclick="reduce('${key}')"></i></p>`;
        num=num+addednewItem[key].quantity
    }
    // badge.style.display = "block";
    badge.innerHTML = num
}
}
card()
function dropdiplay(){
    // console.log(cartsproductsDiv)
    if(clickdown.style.display=="block"){
        clickdown.style.display="none"
    }else{
        clickdown.style.display="block"
    }
   
}
// dropdiplay()
Shoppingcard.addEventListener("click",dropdiplay)
