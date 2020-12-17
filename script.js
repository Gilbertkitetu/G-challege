if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeFromCart = document.getElementsByClassName('btn-remove');
    console.log(removeFromCart);
    for (var i = 0; i < removeFromCart.length; i++) {
        var button = removeFromCart[i]
        button.addEventListener('click', removeCartItem)
            //console.log("Clicked");


    }
    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    var addToCartButtons = document.getElementsByClassName('item-button');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);

    }
}
//add clicked item to cart
function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('item-name')[0].innerText;
    var price = shopItem.getElementsByClassName('item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('item-image')[0].src;
    console.log(imageSrc);
    addItemToCart(title, price, imageSrc)
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    cartItems.append(cartRow)
    var cartRowContent = `
    <div class="cart-row-item">
    <img class="cart-item-image" src="images/BlackMenFossilWatch.jpg" width="100" height="100">
    <span class="cart-item-title">Black Men Fossil</span>
</div>
<span class="cart-price-per-item">21</span>
<div class="cart-item-quantity">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn-remove" type="button">REMOVE
    </button>
    `
    cartRow.innerHTML = cartRowContent;
}
//remove cart item
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}
//quantity changed
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;

    }
    updateCartTotal();
}
//update cart total
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var PriceElement = cartRow.getElementsByClassName('cart-price-per-item')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        console.log(PriceElement, quantityElement);
        var price = parseFloat(PriceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;

        console.log(price * quantity);
        total = total + (price * quantity);

    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}