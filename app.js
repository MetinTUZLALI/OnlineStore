


if (document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded", loadReady)
} else{loadReady}


function loadReady() {

//************
let removeBoxItems=document.getElementsByClassName("btn-danger")
for (let index = 0; index < removeBoxItems.length; index++) {
    removeBoxItems[index].addEventListener("click", removeItems);
    
}


//***********   
let quantityInputs=document.getElementsByClassName("cart-quantity-input")
for (let index = 0; index < quantityInputs.length; index++) {
   quantityInputs[index].addEventListener("change", quantityChanged)
    
}  

//************    


let addToBuyButtons = document.getElementsByClassName("shop-item-button")

for (let index = 0; index < addToBuyButtons.length; index++) {

addToBuyButtons[index].addEventListener("click", addToClicked)    
}
}


function removeItems(event) {
    event.target.parentElement.parentElement.remove()
    updateBoxPriceTotal()
}
function quantityChanged(event) {
    let input=event.target
    if (isNaN(input.value) || input.value <=0) {
       input.value=1 
    }
    updateBoxPriceTotal()    
    
}



function addToClicked(event) {
    let shopItem=event.target.parentElement.parentElement
    let title=shopItem.getElementsByClassName("shop-item-title").innerText
    let price=shopItem.getElementsByClassName("shop-item-price").innerText
    let imageSrc=shopItem.getElementsByClassName("shop-item-image").src

    addToBox(title,price,imageSrc)
}

function addToBox(title,price,imageSrc) {
    let boxRow=document.createElement("")
    boxRow.classList.add("cart-row")
    let cartItems=document.getElementsByClassName("cart-items")

let footItemNames=cardItems.getElementsByClassName("card-items-title")
for (let index = 0; index < footItemNames.length; index++) {
    if (footItemNames[index]).innerText==title {
        alert("this food already in your box")
        return
        
    }
    
}

    let cartRowConntents` <div class="cart-item cart-column">
    <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
    <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
</div>`

boxRow.innerHTML=cartRowConntents
cardItems.append(boxRow)
boxRow.getElementsByClassName("btn-danger").addEventListener("click", removeItems)
boxRow.getElementsByClassName("cart-quantity-input").addEventListener("change",quantityChanged)
}


function updateBoxPriceTotal() {
    let cartItemContainer=document.getElementsByClassName("card-items").getElementsByClassName("card-row")
    let total = 0
    for (let index = 0; index < cartItemContainer.length; index++) {
        const cartRow = cartItemContainer[index];
        let priceElement=cartRow.getElementsByClassName("cart-price")[0]
        let quantityElement=cartRow.getElementsByClassName("cart-quantity-input")
        let price=parseFloat(priceElement.innerText.replace("fr","")
        let quantity=quantityElement.value
        total=total+(price*quantity)
    }
    total=Math.round(total*100)/100
    document.getElementsByClassName("cart-total-price").innerText=total + " fr"
}