function calcmedia(anotas){
    let media = 0
    let cont = 0
    let soma = 0
    for (j in anotas){
        soma = soma + parseFloat(anotas[j].replace(',', '.'), 10)
        cont++
        console.log(soma)
        console.log(cont)
    }
    media = soma/cont
    return media.toFixed(2)
}
var anotas = []
var media = 0
var btnadd = document.querySelector("#addbuton")
var btcalcm = document.querySelector("#calcmediabut")
var reset = document.querySelector("#reset")
var input = document.querySelector("#inputtxt")
var textta = document.querySelector("#textta")
var resultmed = document.querySelector("#resultmedia")
var cont = 1
btcalcm.addEventListener("click",() => {
    media = calcmedia(anotas)
    resultmed.innerText = media
    cont = 1
    anotas = []
})
btnadd.addEventListener("click",() => { 
    var confirm = 0
    confirm = parseFloat(input.value.replace(',', '.'))
    console.log(confirm)
    var h = isNaN(input.value.replace(',', '.'))
    if((0 <= confirm)&&(confirm<=10)&&(h != true)){    
        anotas.push(input.value)
        console.log(anotas)
        textta.value = `${textta.value}\n A nota ${cont} foi ${input.value}`
        input.value = ""
        cont++
    }else {
        alert("Por favor, digite uma nota valida!!!")
    }
})
reset.addEventListener("click",() => {
    anotas = []
    media = 0
    cont = 1
    input.value = ""
    textta.value = ""
    resultmed.innerText = ""
})
