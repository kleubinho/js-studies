window.addEventListener("load", series)
var main = document.getElementById("main")

function series() {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=efef828d8ff113d4cc1a3e609f8de469&language=en-US&page=1")
    .then((response) => response.json())
    .then((resultado) => {
        resultado.results.map((dados, ix) => {
            main.innerHTML += `<div>
            <img src=https://image.tmdb.org/t/p/w500${dados.poster_path}>


            <span id="media">${dados.vote_average}%</span>            


            <h2>${dados.name}</h2>
            <h5>${dados.first_air_date}</h5>
            <a href=detalhes.html?id=${dados.id}>Detalhes</a>
            </div>`;

        })
    })
    .catch((erro) => console.error(`erro ao ler a API -> ${erro}`))
}
