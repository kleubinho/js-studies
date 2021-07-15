// declaração de variaveis para o projeto
var nome = "";
var idade = 0;
var fotoescolhida = "";

//Vamos interagir com o usuário e coletar algumas informações sobre o que deseja
// vamos abrir uma caixa e pedir o nome, a idade e a foto
nome = prompt("Digite o seu nome","Convidado");
idade = prompt("Digite a sua idade","0");
fotoescolhida = prompt("Digite: foto1 ou foto2","foto1");

// Vamos inserir o nome que veio do prompt na tag h1 que está no HTML
document.getElementById("n").innerHTML=nome;

// inserir a idade que veio do prompt na tag h2
document.getElementById("i").innerHTML=idade;

// pegar a tag img por sua posição e inserir uma imagem escolhida pelo usuário
document.getElementsByTagName("img")[0].src="./img/"+fotoescolhida+".jpg";
document.getElementsByTagName("img")[0].height=300;
document.getElementsByTagName("img")[0].width=300;

