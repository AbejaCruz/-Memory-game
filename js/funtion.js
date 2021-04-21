let word=""
const words = ["Hola", "Tarde", "Noche","ADIOS"];

randomWord()


function randomWord(){
  
var randomNumber = Math.floor(Math.random()*words.length);
word=words[randomNumber]
start()
}

function start() {
    document.getElementById("word").innerHTML = word
    setTimeout(deleteWord,1000);
}

function deleteWord(){
    document.getElementById("word").innerHTML = ``
}

