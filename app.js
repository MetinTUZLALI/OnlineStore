


if (document.readyState == "loading") {
    document.addEventListener("DOMContentloaded", loadReady)

} else {
    loadReady()
}
//dinleme eventlerini bir function icine aldik
function loadReady() {
    // ************ Urünü Sepetten silmek Icin eventleri dinliyor
    let removeBoxItmes = document.getElementsByClassName("btn-danger")
    for (let i = 0; i < removeBoxItmes.length; i++) {
        removeBoxItmes[i].addEventListener("click", removeItems)
    }
    // ************ inputtaki adet degisikligi eventi
    let quantityInputs = document.getElementsByClassName("cart-quantity-input")
    for (let i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener("change", quantityChanged)
    }

    // ************bu kisim sepete ekleme eventi
    let addToBuyButtons = document.getElementsByClassName("shop-item-button")
    for (let i = 0; i < addToBuyButtons.length; i++) {
        addToBuyButtons[i].addEventListener("click", addToClicked)
    }
 
}


function removeItems(event) {
    event.target.parentElement.parentElement.remove()
    updateBoxPriceTotal()
}
// ************ inputtaki adet degisikligi eventi functionu
function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateBoxPriceTotal()

}

// ************bu kisim sepete ekleme eventi functionu
function addToClicked(event) {
    let shopItem = event.target.parentElement.parentElement
    let title = shopItem.getElementsByClassName("shop-item-title")[0].innerText
    let price = shopItem.getElementsByClassName("shop-item-price")[0].innerText
    let imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src
    addToBox(title, price, imageSrc)
}


function addToBox(title,price,imageSrc) {
    let boxRow=document.createElement("")
    boxRow.classList.add("cart-row")
    let cartItems=document.getElementsByClassName("cart-items")

let footItemNames=cardItems.getElementsByClassName("card-items-title")
for (let index = 0; index < footItemNames.length; index++) {
    if (footItemNames)[index].innerText==title {
        alert("this food already in your box")
        return
        
    }
    
}

let cartRowConnents = ` <div class="cart-item cart-column">
<img class="cart-item-image" src="${imageSrc}" width="100" height="100">
<span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price} </span>
<div class="cart-quantity cart-column">
<input class="cart-quantity-input" type="number" value="1">
<button class="btn btn-danger" type="button">REMOVE</button>
</div>`
    boxRow.innerHTML = cartRowConnents
    cartItems.append(boxRow)
    boxRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeItems)
    boxRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged)

}


function updateBoxPriceTotal() {
    let cartItemContainer = document.getElementsByClassName("cart-items")[0].getElementsByClassName("cart-row")
    let total = 0
    for (let i = 0; i < cartItemContainer.length; i++) {
        let cartRow = cartItemContainer[i]
        let priceElement = cartRow.getElementsByClassName("cart-price")[0]
        let quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0]
        let price = parseFloat(priceElement.innerText.replace("fr", ""))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName("cart-total-price")[0].innerText = total + " fr"
}