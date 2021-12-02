const keys = document.getElementsByTagName("input");
const keyboard = document.getElementById("wrapper");
const words = ["fonksiyon", "enstitü", "programlama", "alegori"];
const randomWord = words[Math.floor(Math.random() * words.length)];
const wordPlace = document.querySelector("#wordplace").children[1];
const buttonPlace = document.querySelector("#button-div");


const ul = document.createElement('ul');
const button = document.createElement('button');
button.className = "btn btn-success";


wordPlace.appendChild(ul);
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
};

buttonPlace.insertBefore(button, wordPlace.children[0]);



for (let i = 0; i < randomWord.length; ++i) {
    var li = document.createElement('li');
    ul.appendChild(li);
    li.className = "letter";
    li.style.margin = 4 + "px"

};

setAttributes(ul, { "id": "word" });
li.style.margin = 4 + "px";


var wordArray = Array(randomWord)[0].split('');

var array = [];
var guessCount = 0;
button.textContent = `Puanınız : ${guessCount}`;


let k = 0;
keyboard.addEventListener('click', function (e) {

    console.log(randomWord.toUpperCase().indexOf(e.target.value));
    
    for (var j = 0; j < randomWord.length; j++) {



        if (randomWord[j].toUpperCase() == e.target.value) {

            array.push(e.target.value);
            ul.children[j].textContent = e.target.value;
            guessCount = array.length * 10;

        }

    };
    if (randomWord.toUpperCase().indexOf(e.target.value) < 0) {
        
        e.stopPropagation();
        k+=10;
    }
    button.textContent = `Puanınız : ${guessCount - k}`;

    e.target.setAttribute('style', "font-size: 19px; color: #3498db; box-shadow: inset -3px -3px 7px #ffffff73, inset 2px 2px 5px rgba(94,104,121,0.288);")
});



addEventListener('click', function (e) {
    if (e.target.textContent == "Tekrar Dene") {
        this.location.reload();
    }
});








