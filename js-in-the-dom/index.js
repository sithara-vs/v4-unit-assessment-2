let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let formContainer = document.querySelector('form-container')
let main = document.querySelector('main')
let emailList =[]
let form = document.querySelector(".form");
//let formButton = document.getElementById("formBtn").addEventListener("click", subscribe);
console.log("sithara");
let formBtn = document.getElementById("close-form");
formBtn.addEventListener("click",toggler);
//.addEventListener('click',buttonClick)

function toggler() {
  form.classList.toggle("hide");
  if (formBtn.innerText == "X") {
    console.log("test");
    formBtn.innerText = "+";
  } else {
    formBtn.innerText = "X";
  }
}


function validateForm()
{
    if (nameInput.value == false && emailInput.value == false)
    {
        alert("Please fill out both your name and email to subscribe");
        nameInput.style.borderColor = "red";
        emailInput.style.borderColor = "red";
        console.log("false")
    }
    else if(nameInput.value == false && emailInput.value == true)
    {
        nameInput.style.outlineColor = "red";
        alert("Please fill out your name to subscribe");
        console.log("false2")
    }
    else if(nameInput.value == true && emailInput.value == false)
    {
        emailInput.style.border = "red";
        alert("Please fill out your email to subscribe");

    }
    else{
        emailList.push(nameInput.value,emailInput.value);
        displayThankYou()
    }

}
form.addEventListener("submit",function(e){


e.preventDefault();
validateForm();

})

//form.addEventListener("submit",cb(event) =>
//{
//event.preventDefault();
  //  validateForm();
//})
function displayThankYou(){
    formContainer.innerText ="Thank You for subscribing!"
}
nameInput.addEventListener("change",function(e){
    nameInput.style.border = "none";
})
let cart = document.createElement("div"); 
let cartItems = 0;
function addToCart(){
    
}