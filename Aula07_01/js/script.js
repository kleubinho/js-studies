window.addEventListener("load", filmes);
var main = document.getElementById("main")


function filmes() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=efef828d8ff113d4cc1a3e609f8de469&language=pt-BR&page=1")
        .then((response) => response.json())
        .then((resultado) => {
            resultado.results.map((dados, ix) => {
                main.innerHTML += `<div>
                <img src=https://image.tmdb.org/t/p/w500${dados.poster_path}>


                <span id="media">${dados.vote_average}%</span>            


                <h2>${dados.title}</h2>
                <h5>${dados.release_date}</h5>
                </div>`;

            })
        })
        .catch((erro) => console.error(`erro ao ler a API -> ${erro}`))
}
