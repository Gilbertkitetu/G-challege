console.log("Hello World;");
// var price = {
//     cup: 3,
//     plate: 5,
//     spoon: 1,
//     basin: 6,
//     thermos: 20,
//     trouser: 15,
//     tie: 5,
//     shirt: 16,
//     t_shirt: 10,
//     socks: 3
// };


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

function handleChange(e) {
    const { checked } = e.target;
    if ({ checked }) {
        // alert("Checked");
        document.getElementById("pop-up").style.display = "block";

    } else {
        alert("Not checked");
    }
    //alert("Checked");
}

function closePopUp() {
    document.getElementById("pop-up").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popUp) {
        document.getElementById("pop-up").style.display = "none";
    }
}