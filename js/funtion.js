let word=""
const words = ["Hola hipopotamo", "Hola hipopotamo", "Noche  hipopotamo","ADIOS  hipopotamo"];
const form = document.getElementById("form")
randomWord()

function randomWord(){
  
var randomNumber = Math.floor(Math.random()*words.length);
word=words[randomNumber]
start()
}

function start() {
    document.getElementById("word").innerHTML = word
    setTimeout(deleteWord,900);
}
function deleteWord(){
    document.getElementById("word").innerHTML = ``
}

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const wordInput = form['wordInput']
    
    if(wordInput.value === word){
        alert("Iguales")
    }

    if(wordInput.value != word){
        alert("Diferentes")
    }
})