// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }

//Add item to cart after been clicked
function AddClickedToCart(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var item_title = shopItem.getElementByClassName('item-name')[0].innerText;
    var price = shopItem.getElementByClassName('item-price')[0].innerText;
}