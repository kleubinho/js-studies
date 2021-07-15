//dom -> document object modeling - manipulação de tags html
//alert("Olá! Eu sou uma caixa de mensagem");
//document.getElementsByTagName("h1")[0].innerHTML="Mudei o texto";
/*
O javascript é baseado em eventos, ou seja, ele
 olha para o que o usuário está fazendo em relação
 a página web. Se o usuário está clicando em algo,
 ele ele digita algo em algum lugar .. 


 Os eventos sempre chamam função. Então todas as 
 vezes que você for usar um evento, também usará
 uma função.
*/

function texto(){

    //dry -> don't repeat yourself
    //refactor -> refatorando o código. Melhorando o código

    // document.getElementsByTagName('h1')[0].innerHTML='Mudou o texto'
    // document.getElementsByTagName('h1')[0].style.color="#f00";
    // document.getElementsByTagName('h1')[0].style.fontSize="50pt";
    // document.getElementsByTagName('h1')[0].style.textAlign="center";
    
    //refactor -> refatorando o código. Melhorando o código
    // var h1 = document.getElementsByTagName('h1')[0];
    //     h1.innerHTML="Novo texto";
    //     h1.style.color="#0f0";
    //     h1.style.backgroundColor="#000";
    //     h1 = "Elementos";
    //     h1.style.backgroundColor="#f00";
    
    //refactor -> refatorando o código. Melhorar o código
    const h1 = document.getElementsByTagName('h1')[0];
    h1.innerHTML="Novo texto";
    h1.style.fontFamily="arial";
    h1.style.fontSize="10pt";
    h1.style.color="#005";
}

function verificar(){

var nota = 0;

nota = prompt("Digite a sua nota");

// Se a nota for maior ou igual a 7->Aprovado
// Se a nota for menor ou igual a 4->Reprovado
// Se a nota for maior que 4 e menor 7, ou seja, o que sobrou, então estará recuperação

if(nota >= 7)
    alert("Aprovado")
else if(nota <= 4)
    alert("Reprovado")
else
    alert("Recuperação")
}

function verificaTer(){
    var n = 0;
    n = prompt("Digite a sua nota");

    n >= 7 ? alert("Aprovado"):alert("Reprovado");
}


function cargoSalario(){
    /*
    Diretor = 20.000
    Gerente = 15.000
    Analista = 8.000
    Assitente = 5.000
    Auxiliar = 2.000
    */

    var cargo = prompt("Digite um cargo:\nDiretor,Gerente,Analista,Assitente,Auxiliar");
    
    cargo = cargo.toLowerCase();//converter em letras minusculas

    // if(cargo == "diretor")
    //     alert("Salário: R$ 20.000")

    // else if(cargo == "gerente")
    //     alert("Salário: R$ 15.000")

    // else if(cargo == "Analista")
    //     alert("Salário: R$ 8.000")

    // else if(cargo == "Assitente")
    //     alert("Salário: R$ 5.000")

    // else if(cargo == "Auxiliar")
    //     alert("Salário: R$ 2.000")

    // else
    //     alert("Cargo não existente")

    //refactor code
    switch(cargo.toLowerCase()){
        case "diretor":
            alert("Salário: R$ 20.000");
            break;
        case "gerente":
            alert("Salário: R$ 15.000");
            break;
        case "analista":
            alert("Salário: R$ 8.000");
            break;
        case "assistente":
            alert("Salário: R$ 5.000");
            break;
        case "auxiliar":
            alert("Salário: R$ 2.000");
            break;
        default:
            alert("O cargo não existe");
            break
    }

}











