function valida() {
    const nome = document.getElementById("txtNome");
    const email = document.getElementById("txtEmail");
    const idade = document.getElementById("txtIdade");
    const telefone = document.getElementById("txtTelefone");

    //vamos retirar os espaços a mais com o comando TRIM e verificar se o campo esta vazio
    if (nome.value.trim() == "") {
        alert("Você precisa preencher o nome");
        //vamos colocar o ponto de inserção devolta a caixa nome
        nome.value = "";
        nome.focus();//a caixa nome volta a ter  o foco
    }

    email.value = email.value.toLowerCase();

    //validar telefone
    if (telefone.value.trim() = "") {
        alert("Você precisa preencher o telefone")
        telefone.value = "";
        telefone.focus();
    }
}



/*Estrutura de repetição

- Laço for
        - Laço while
        - Laço do while

        - forEac
        - map
        
para as estruturaas For, While e Do While o trabalho e feito da seguinte forma:

    -inicio de variavel;
    -condição para repetição;
    -corpo de execução;
    -incrimentação ou decrementação

    Exemplo: realizar uma contagem que parte do numero 1 e vai a 10
    -estrutura for
        for(v = 1; v <= 10; ++v){
            console.log(v)
        }

        -estrutura while
            v = 1
            while(v <= 10){
                console.log(v)
                v++
            }

        -estrutura do while
            do    


        -estrutura do while    

        */

function contar() {
    for (v = 0; v <= 10; v++) {
        console.log(v);
    }
}

function criarElementos() {
    for (b = 1; b <= 10; b++) {
        document.getElementById("saida").innerHTML += "<button>Botão Criado - " + b + "</button>"
    }

    for (b = 1; b <= 10; b++) {
        document.getElementsByTagName("button")[b].style.backgroundColor = "red";
        document.getElementsByTagName("button")[b].style.Color = "white";
        document.getElementsByTagName("button")[b].style.margin = "5px";
    }

}

function tabuadaSimples() {
    inicial = 0

    while (inicial <= 10) {
        document.getElementById("saida").innerHTML += "<br> 2 x " + inicial + " = " + (2 * inicial);
        inicial++;
    }
}

function tabuadaCompleta() {

    inicial = 0;
    numeros = 1;

    while (numeros <= 10) {

        while (inicial <= 10) {
            document.getElementById("saida").innerHTML += "<br>" + numeros + "x" + inicial + "=" + (numeros * inicial);
            inicial++;
        }

        inicial = 0;
        document.getElementById("saida").innerHTML += "<hr>"
        numeros++;
    }
}

function DoWhile() {
    n = 20;

    do {
        console.log(n);
        n++;
    } while (n < 10);
}

//vamos trabalhar com array. Array é um conjunto de dados, ou seja, uma coleção de dados.
//e você pode obter os dados pegando-os por sua posição

// const cidades = ["São Paulo","Salvador","Leme","Boro"]; //Array ou lista
// console.log(cidades);

// cidades.push("Curitiba"); // variavel comum
// console.log(cidades);

// const nomes = [];
// console.log(nomes);

// nomes.push("Kleber");
// nomes.push("Henrique");
// console.log(nomes.length);


function arrayUmNumeros() {
    const valores = [];
    console.log(valores);
    console.log(valores.length);

    for (ano = 1975; ano <= 2021; ano++) {
        valores.push(ano);
    }
    console.log(valores);
    console.log(valores.length)
}

function arrayDoisNumeros() {
    const n = [10, 05, 60, 23, 04, 12, 18, 81, 37]

    // for (i = 0; i <= 8; i++) {
    //     if (n[i] % 2 == 0) {
    //         console.log(n[i])
    //     }
    // }

    // for(i in n){
    //     console.log(i)
    // }

    n.forEach(function(v,i){
        console.log(v);
    });

    n.map(function(v,i){
        console.log(v);
    })

}