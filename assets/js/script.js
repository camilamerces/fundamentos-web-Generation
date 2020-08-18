/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por classes: getElementsClassName()
por Seletor: querySelector() - melhor prática
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let serie = document.querySelector('#serie')

let nomeValido = false
let emailValido = false
let serieValido = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeValido = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailValido = true
    }
}

function validaSerie() {
    let txtSerie = document.querySelector('#txtSerie')

    if (serie.value.length < 50) {
        txtSerie.innerHTML = 'Texto muito curto, fale mais!'
        txtSerie.style.color = 'red' 
        txtSerie.style.display = 'block'

    } else if (serie.value.length > 200) {
        txtSerie.innerHTML = 'Texto muito longo, seja mais objetivo!'
        txtSerie.style.color = 'red' 
        txtSerie.style.display = 'block'
    }
     else {
        txtSerie.style.display = 'none'
        serieValido = true
    }
}

function enviaFormulario() {
    let txtEnvia = document.querySelector('#txtEnvia')

    if (nomeValido == true && emailValido == true && serieValido == true) {
       alert('Formulário enviado com sucesso!')
    } else {
        txtEnvia.innerHTML = 'Preencha todos os campos do formulário corretamente.'
    }
}
