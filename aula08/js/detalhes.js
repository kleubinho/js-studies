window.addEventListener("load", detalhesSeries);

var id = window.location.search.substring(4, 10);

var h1 = document.getElementsByTagName("h1")[0];
var main = document.getElementById("detalhes");

function detalhesSeries() {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=efef828d8ff113d4cc1a3e609f8de469&language=en-US`)
        .then((response) => response.json())
        .then((resultado) => {
            console.log(resultado)
            h1.innerHTML = resultado.name;
            main.innerHTML = `<div id="img">
        <img src="https://image.tmdb.org/t/p/w500${resultado.poster_path}"
        </div>
        <div id="content">
            <h4>${resultado.name}<span class=texto>(${resultado.first_air_date.substring(0, 4)})</span></h4>
        <p id="avaliacao">
            ${resultado.vote_average}%
        </p>
        <p id="titulo_overview">
            Sinopse
        </p>
        <p id="txtsinopse">
            ${resultado.overview}
        </p>                                
        </div>
        `;
            main.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${resultado.backdrop_path})`;
            main.style.backgroundSize = "100%";
        })
        .catch((erro) => console.error(`Erro ao tentar detalhar o serie -> ${erro}`))
}