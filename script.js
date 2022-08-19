var alert1 = document.querySelector('#alert1');
var alert2 = document.querySelector('#alert2');

var nameIn = document.querySelector('#nameIn');

var result = document.querySelector('#result');
var answer = document.querySelector('#answer');

var okBtn = document.querySelector('.main button:nth-of-type(2)')
var finishBtn = document.querySelector('.main button:nth-of-type(3)')

var additional = document.querySelector('.additional');

const colorsDict = {
                    "YEllow" : "#ffcb37" ,
                    "GREEN" : "#005d56" ,
                    "BROWN" : "#943d1c" ,
                    "BLUE" : "#0052b8" ,
                    "PINK" : "#ff83a1" ,
                    "BLACK" : "#0b0b0d" ,
                };

var colors = Object.keys(colorsDict)

var selected = [];

let timer;





if (selected.length == 0) {

    finishBtn.style.display='none';

}





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
    if (confirm("Show everybody's color??!") == true) {
        finishBtn.style.display = 'none';
    }

}





function ok() {

    nameIn.value = "";
    if (confirm("Did you memorize your color??!") == true) {
        okBtn.style.display = 'none';
    }

}