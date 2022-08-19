var alert1 = document.querySelector('#alert1');
var alert2 = document.querySelector('#alert2');

var nameIn = document.querySelector('#nameIn');

var result = document.querySelector('#result');
var answer = document.querySelector('#answer');

var additional = document.querySelector('.additional');

let timer;

function submit() {
    nameIn.value = nameIn.value.trim().toUpperCase();
    if (nameIn.value == "") {

        clearTimeout(timer)

        alert1.classList.add("active");
        additional.classList.add("active");

        additional.style.maxHeight = "40px";
        additional.style.transition = "max-height .3s";

        timer = setTimeout(function () {

            additional.style.maxHeight = 0;

            setTimeout(function () {

                alert1.classList.remove("active");
                additional.classList.remove("active");

            }, 300);

        }, 2700);

    } else if (nameIn.value == 'ALI') {

        clearTimeout(timer)

        alert2.classList.add("active");
        additional.classList.add("active");

        additional.style.maxHeight = "40px";
        additional.style.transition = "max-height .3s";

        timer = setTimeout(function () {

            additional.style.maxHeight = 0;

            setTimeout(function () {

                alert2.classList.remove("active");
                additional.classList.remove("active");

            }, 300);

        }, 2700);

    } else {
        null;
    }
}

function finish() {
    nameIn.value = "";
}