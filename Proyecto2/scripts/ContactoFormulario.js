const nombre = document.getElementById("name")
const nombreempresa = document.getElementById("namecompany")
const email = document.getElementById("email")
const motivo = document.getElementById("motive")
const numerotel = document.getElementById("telephone")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido, ingrese más caracteres <br>`
        entrar = true
    }
    if(nombreempresa.value.length <2){
        warnings += `El nombre de la empresa no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(motivo.value.length <10){
        warnings += `El motivo no es valido, ingrese más caracteres <br>`
        entrar = true
    }
    if(numerotel.value.length <10){
        warnings += `El número es demasiado corto <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado correctamente, gracias"
    }
})