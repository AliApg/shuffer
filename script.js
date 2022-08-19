var alert1 = document.querySelector('#alert1');
var alert2 = document.querySelector('#alert2');

var nameIn = document.querySelector('#nameIn');

var result = document.querySelector('#result');
var answer = document.querySelector('#answer');

var additional = document.querySelector('.additional');

const colorsDict = {
                    "YELLOW" : "#ffcb37" ,
                    "GREEN" : "#2B7A0B" ,
                    "BROWN" : "#61481C" ,
                    "BLUE" : "#0052b8" ,
                    "PINK" : "#ff83a1" ,
                    "BLACK" : "#0b0b0d" ,
                };

var colors = Object.keys(colorsDict);

var people = {};

let timer;

function submit() {

    nameIn.value = nameIn.value.trim().toUpperCase();

    if (nameIn.value == "") {

        clearTimeout(timer);

        alert1.classList.add("active");
        additional.classList.add("active");

        additional.style.maxHeight = "55px";
        additional.style.transition = "max-height .5s ease-in-out";

        timer = setTimeout(function () {

            additional.style.maxHeight = 0;

            setTimeout(function () {

                alert1.classList.remove("active");
                additional.classList.remove("active");

            }, 500);

        }, 2500);

    } else if (Object.keys(people).includes(nameIn.value)) {

        clearTimeout(timer);

        alert2.classList.add("active");
        additional.classList.add("active");

        additional.style.maxHeight = "55px";
        additional.style.transition = "max-height .5s ease-in-out";

        timer = setTimeout(function () {

            additional.style.maxHeight = 0;

            setTimeout(function () {

                alert2.classList.remove("active");
                additional.classList.remove("active");

            }, 500);

        }, 2500);

    } else {
        additional.style.maxHeight = "55px";
        additional.style.transition = "max-height .5s ease-in-out";

        people[nameIn.value] = colors[ Math.floor(Math.random() * colors.length) ]
        colors = colors.filter(data => data != people[nameIn.value]);

        document.querySelector('#answer').innerHTML = people[nameIn.value]
        document.querySelector('#result').style.display = 'block';

        document.querySelector('#answer').style.color = colorsDict[people[nameIn.value]];

        nameIn.style.display = 'none';
        document.querySelector('.main label').style.display = 'none';
        document.querySelector('.main button:nth-of-type(1)').style.display = 'none';
        document.querySelector('.main button:nth-of-type(2)').style.display = 'block';
        document.querySelector('.main button:nth-of-type(4)').style.display = 'none';

        nameIn.value = "";
    }


    if (colors.length == 0) {

        document.querySelector('.main button:nth-of-type(1)').style.display = 'none';

    } else if (colors.length == 6) {

        document.querySelector('.main button:nth-of-type(4)').style.display = 'block';

    }

}




function finish() {

    nameIn.value = "";
    if (confirm("Show everybody's color??!") == true) {
        nameIn.style.display = 'none';
        document.querySelector('.main label').style.display = 'none';
        document.querySelector('.main button:nth-of-type(3)').style.display = 'block';
        document.querySelector('.main button:nth-of-type(4)').style.display = 'none';
    }

}



function ok(x) {

    nameIn.value = "";

    if (x == 1) {
        if (confirm("Did you memorize your color??!") == true) {

            document.querySelector('.main button:nth-of-type(2)').style.display = 'none';
            document.querySelector('.main button:nth-of-type(4)').style.display = 'block';
            document.querySelector('#result').style.display = 'none';

            if (colors.length == 0) {

                document.querySelector('.main button:nth-of-type(1)').style.display = 'none';

            } else {

                nameIn.style.display = 'block';
                document.querySelector('.main label').style.display = 'block';
                document. querySelector('.main button:nth-of-type(1)').style.display = 'block';
            }
        }
    }

    if (x == 0) {
        if (confirm("Did you want to reset the game??!") == true) {
            location.reload()
        }
    }

}