const form = document.querySelector("#form-habits")
const nlwSetUp = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)



function add() {

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)  // a variavel que recebe o dia atual
    const dayExists = nlwSetUp.dayExists(today) //verificar se o today inserido já existe 

    if(dayExists) {
        alert('O dia já foi incluído. 💜')
        return
    }

    nlwSetUp.addDay(today) // Add a day to registered days and render the layout after that
}

function save() {

    localStorage.setItem('habits@app', JSON.stringify(nlwSetUp.data))    //local storage salva dados na memoria do browser
}



const data = JSON.parse(localStorage.getItem('habits@app')) || {}
nlwSetUp.setData(data)
nlwSetUp.load()