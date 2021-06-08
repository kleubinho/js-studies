

function texto(){
    const h1 = document.getElementsByTagName("h1")[0];

    h1.innerHTTML="Novo texto";
    h1.style.fontFamily="arial";
    h1.style.fontSize="10pt";
    h1.style.color="#006"
    
}


function verificar(){


    var nota = 0;

    nota = prompt("Digite a sua nota")



    if(nota >= 7)
        alert("Você esta aprovado");
    else if( nota >= 4)
        alert("Você ta de recuperação");  
    else
        alert("Você reprovou")      
}

function verificaTer(){
    var n = 0;
    n = prompt("Digíte a sua nota");

    n >= 7 ? alert("aprovado"): alert("reprovado");
}


function cargoSalario(){
var cargo = prompt("digite um cargo: \nAtacante,Meio,Zagueiro,Goleiro,Tecnico")

cargo = cargo.toLowerCase();//converter em letras minusculas

    switch(cargo.toLowerCase()){
        case "atacante":
            alert("Salário: R$ 20.000");
            break;
        case "meio":
            alert("Salário: R$ 15.000");
            break;
        case "zagueiro":
            alert("Salário: R$ 10.000");
            break;
        case "goleiro":
            alert("Salário: R$ 5.000");
            break;
        case "tecnico":
            alert("Salário: R$ 2.000");
            break;
        default:
            alert("posição não existe");
            break

            
    }
}