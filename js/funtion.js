let word = "",
    lives = 3,
    level = 1

const wordsLevelOne = ["Uva", "Hola", "Noche", "Adios", "Rey", "Ven", "Vete", "Este", "Esta", "Cruz", "Cobre", "Cura",
    "Area", "Apto", "Anca", "Boom", "Buey", "Oso", "Ave", "Rio", "Res", "Pez", "Cana", "Agil", "Ateo", "Hilo", "Cuna", "Dama",
    "Dato", "Diez", "Copa", "Cono", "Dios", "Duro", "Duda", "Acido"
]

const wordsLevelTwo = ["Abuela", "Afloja", "Alpina", "Angola", "Barcos", "Blusa", "Brasil", "Cabeza", "Canada", "Cambio", "Caribe", "Carros",
    "Conmigo", "Despues", "Trabajo", "Segunda", "Primera", "Informe", "Revista", "Algunos", "Sistema", "Partido", "Encanta", "Mejores", "Persona",
    "Escuela", "Nuestro", "Durante", "General", "Podemos", "Nacional", "Politica", "Proyecto", "Estrella", "Justicia", "Reciente", "Productos",
    "Accidente", "Servicios", "Plantilla", "Siguiente", "Naturales", "Residencia", "Familiares", "Habitantes", "Comunicado", "Desarrolla", "Disciplina"
]

const wordsLevelThree = ["Es Blanco", "Mi Vestido", "El Piso", "Esa herida", "Comprado entradas", "Grandes entradas", "La falda",
    "queda grande", "En general", " estoy bien", "He alquilado", "signo zodiacal", "una manzana", "ojo verde"
]


const form = document.getElementById("form")


function randomWord() {

    form.reset()
    if (level <= 3) {
        var randomNumber = Math.floor(Math.random() * wordsLevelOne.length)
        word = wordsLevelOne[randomNumber]
    }
    if (level <= 6 && level > 3) {
        var randomNumber = Math.floor(Math.random() * wordsLevelTwo.length)
        word = wordsLevelTwo[randomNumber]
    }
    if (level <= 9 && level > 6) {
        var randomNumber = Math.floor(Math.random() * wordsLevelThree.length)
        word = wordsLevelThree[randomNumber]
    }
    start()
}

function start() {
    document.getElementById("word").innerHTML = word
    if (level <= 3) {
        setTimeout(deleteWord, 1500)
    }
    if (level <= 6 && level > 3) {
        setTimeout(deleteWord, 1000)
    }
    if (level <= 9 && level > 6) {
        setTimeout(deleteWord, 900)
    }
}

function deleteWord() {
    document.getElementById("word").innerHTML = ``
}

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const wordInput = form['wordInput']
    if (document.getElementById('validate').disabled === true) {
        document.getElementById('start').innerText = "Iniciar"
        document.getElementById('validate').disabled = false
        document.getElementById('start').disabled = true
        document.getElementById('wordInput').disabled = false
        document.getElementById('heart_3').src = "./img/heart.png"
        document.getElementById('heart_2').src = "./img/heart.png"
        document.getElementById('heart_1').src = "./img/heart.png"
        lives = 4
        randomWord()
    }
    if (lives >= 1) {
        if (wordInput.value.toLowerCase() === word.toLowerCase()) {
            document.getElementById("text").innerHTML = `Correcto`
            document.getElementById("text").style.color = `green`
            setTimeout(function removeText() {
                document.getElementById("text").innerHTML = ``

            }, 900)
            lives = lives
            level = level + 1
            if (level === 10) {
                alert("ganaste")
            } else {

                randomWord()
            }

        } else {

            lives = lives - 1
            level = level - 1
            if (lives < 3) {
                document.getElementById("text").innerHTML = `Erraste`
                document.getElementById("text").style.color = `Red`
                setTimeout(function removeText() {

                    document.getElementById("text").innerHTML = ``

                }, 900)
            }
            if (lives === 2) {
                document.getElementById('heart_3').src = "./img/heart-p.png"
            }
            if (lives === 1) {
                document.getElementById('heart_2').src = "./img/heart-p.png"
            }
            if (lives === 0) {
                document.getElementById('heart_1').src = "./img/heart-p.png"
                setTimeout(function () {
                    document.getElementById('validate').disabled = true
                    document.getElementById('start').innerText = "Reintentar"
                    document.getElementById('start').disabled = false
                    document.getElementById('wordInput').disabled = true
                }, 500);

            }
            if (level === 0) {
                level = 1
            }
            randomWord()
        }

    }
})