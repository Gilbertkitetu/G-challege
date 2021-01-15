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
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClick)
}
//purchase should clear the cart
function purchaseClick() {
    alert('Thank you for you purchase');
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}
//add clicked item to cart
function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('item-name')[0].innerText;
    var price = shopItem.getElementsByClassName('item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('item-image')[0].src;
    console.log(imageSrc);
    addItemToCart(title, price, imageSrc);
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added');
            return
        }
    }
    var cartRowContent = `
    <div class="cart-row-item">
    <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
    <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price-per-item">${price}</span>

<div class="cart-item-quantity">
    <input class="cart-quantity-input" type="number" value="1">
    <span class="total-per-item">$totalPerItem}</span>
    <button class="btn-remove" type="button">REMOVE
    </button>
    </div>
    `
    cartRow.innerHTML = cartRowContent;
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
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
    var totalPerItem = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var PriceElement = cartRow.getElementsByClassName('cart-price-per-item')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var totalPerI = cartRow.getElementsByClassName('total-per-item')[0];
        console.log(PriceElement, quantityElement);
        var price = parseFloat(PriceElement.innerText.replace('$', ''));
        totalPerItem = parseFloat(totalPerI.innerText.replace('$'));
        var quantity = quantityElement.value;
        if (quantity < 10) {
            totalPerItem = price * quantity;
        } else if (quantity >= 10 && quantity < 25) {
            totalPerItem = price * quantity;
            var discount1 = quantity * 0.1;
            totalPerItem = totalPerItem - discount1;

        } else if (quantity >= 25 && quantity < 50) {
            totalPerItem = price * quantity;
            var discount2 = quantity * 0.25;
            totalPerItem = totalPerItem - discount2;
        } else {
            totalPerItem = price * quantity;
            var discount3 = quantity * 0.5;
            totalPerItem = totalPerItem - discount3;
        }


        console.log(totalPerItem);


        console.log(price * quantity);
        var withoutDiscountPerItem = 0;
        withoutDiscountPerItem = withoutDiscountPerItem + (price * quantity);

        total = total + totalPerItem;

    }
    //this totalperitem var has discount
    //total var is the sum of totalperitem
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + withoutDiscountPerItem;
    document.getElementsByClassName('cart-total-discounted')[0].innerText = '$' + total;
}