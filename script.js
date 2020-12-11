console.log("Hello World;");
var price = {
    cup: 3,
    plate: 5,
    spoon: 1,
    basin: 6,
    thermos: 20,
    trouser: 15,
    tie: 5,
    shirt: 16,
    t_shirt: 10,
    socks: 3
};


// const cup = document.getElementById('cup').value;
// cup.addEventListener('change', (event) => {
//     if (event.target.checked) {
//         alert('Checked');
//     } else {
//         alert('Not checked');
//     }
// });
var popUp = document.getElementById("pop-up");
var span = document.getElementsByClassName("close-popup")[0];
var selectedItem = document.getElementById("itemName");
var pricePerItem = document.getElementById("price");
//console.log(document.getElementById("itemName"));
var numberOfItems = document.getElementById("itemsNumber");
//console.log(numberOfItems.value);
var btnAdd = document.getElementById("btn-add");
var totalPer = document.getElementById("totalPer");


let valuePassed;

function handleChange(e) {
    const { checked } = e.target;
    if ({ checked }) {
        // alert("Checked");
        document.getElementById("pop-up").style.display = "block";
        alert(e.target.value);
        valuePassed = e.target.value;
        alert(valuePassed);
        document.getElementById("itemName").innerHTML = e.target.value;
        checkValue(e.target.value);

        var totalPer = objectValues[i] * document.getElementById("itemName").value;
        document.getElementById("totalPer").innerHTML = totalPer;

    } else {
        alert("Not checked");
    }
    //alert("Checked");
}


function closePopUp() {
    document.getElementById("pop-up").style.display = "none";
    alert(valuePassed);
}

window.onclick = function(event) {
    if (event.target == popUp) {
        document.getElementById("pop-up").style.display = "none";
    }
}

var keyValue = Object.keys(price);
console.log(keyValue);
var objectValues = Object.values(price);
console.log(objectValues);

function checkValue(valuePassed) {
    for (let i = 0; i < 10; i++) {
        if (valuePassed == keyValue[i]) {
            document.getElementById("price").innerHTML = objectValues[i];
            //totalPerItem(objectValues[i], numberOfItems.value);

        }

    }
}

// function totalPerItem(valuePassed, amountPer) {
//     for (let i = 0; i < 10; i++) {
//         if (valuePassed == keyValue[i]) {
//             totalPer = objectValues[i] * amountPer;
//             document.getElementById("amountper").innerHTML = totalPer;

//         }

//     }
//     alert(valuePassed);
// }
// function addButton() {

// }