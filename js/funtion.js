let word="test"

start()

function start() {
    document.getElementById("word").innerHTML = word
    setTimeout(deleteWord,1000);
}

function deleteWord(){
    document.getElementById("word").innerHTML = ``
}
