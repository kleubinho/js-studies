// declaração de variáveis para o projeto
var nome = "";
var idade = 0;
var fotoescolhida = "";
// vamos interagir com o usuário e coletar algumas informaçoes sobre oque dejsa
// vamos abrir um caixa e pedir o nome, a idade e a foto
nome = prompt("Digite seu nome", "Convidado");
idade = prompt("digite sua idade","0");
fotoescolhida = prompt("digite: foto1 ou foto2","foto1");

// Vamos inserir o nome que veio do prompt na tag h1 que está no HTML
document.getElementById("n").innerHTML=nome;

// inserir a idade que veio do prompt na tag h2
document.getElementById("i").innerHTML=idade;

// pegar a tag img por sua posicao e inserir uma imagem escolhida pelo usuario
document.getElementsByTagName("img")[0].src="./img/"+fotoescolhida+".jpg";
  