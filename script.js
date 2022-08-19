// $('.main').hover(function () {
//     $('.menu-sub', this).toggleClass('open', 500);
// });

var alert1 = document.querySelector('#alert1');
var alert2 = document.querySelector('#alert2');

var nameIn = document.querySelector('#nameIn');

var result = document.querySelector('#result');
var answer = document.querySelector('#answer');

// var submit = document.querySelector('#submit')
// var reset = document.querySelector('#reset')

let myTimer;

function submit() {
    nameIn.value = nameIn.value.trim().toUpperCase();
    if (nameIn.value == "") {
        clearInterval(myTimer);
        // $('#alert1').addClass("active", 500);
        alert1.classList.add("active");
        // alert1.style.transition = "all 1s";
        // answer.classList.remove("active");
        myTimer = setInterval(() => {
            alert1.classList.remove("active");
        }, 2000);
    }
}

function finish() {
    nameIn.value = "";
}