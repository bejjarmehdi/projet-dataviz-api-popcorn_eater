import { fetchGenreFilm, nomGenres } from "./affichageGenre.js";
import { hor, affichageDate} from "./horloge.js"

function hor() {
  let temps = new Date();
  let heures = temps.getHours();
  let minutes = temps.getMinutes();
  let secondes = temps.getSeconds();
  if (heures < 10) {
      heures = "0" + heures;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (secondes < 10) {
     secondes = "0" + secondes;
    }
  let heureA = heures + ":" + minutes + ":" + secondes;
  document.getElementById('horloge').textContent = heureA;
  
}
hor();
setInterval(hor,1000);


function affichageDate(){
let d = new Date();
let e = d.toLocaleDateString();
document.getElementById('date').textContent = e;
} 

affichageDate();


const options = {   //Options d'appel de l'api
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTc1MDRkOTcwZDk4NTUyYmEwN2MzNTVmMzNmNzlmOSIsInN1YiI6IjY1NWIzN2I5ZWE4NGM3MTA5NmRmZGMyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJXzwWzMxRsckdVC3N3a2adGSP2pkZOzYDMD07pv6nU'
    }
  }
  
async function fetchDataFilm(titreFilm) {  //Récupère les données d'un film sous forme de tableau
  try {
    const reponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${titreFilm}&include_adult=false&language=en-US&page=1`, options);
    const data = await reponse.json();
    const film = data.results;
    genererfilm(film);
  }
  catch (error){
      alert("Mauvaise saisie");
      console.error(error);
  }
}

async function genererfilm(films){   //Exploite le tableau de données pour un seul film, et extrait les infos demandées
  console.log(films[0].original_title);
  const section= document.querySelector(".movie-card");
  const urlImage = "https://image.tmdb.org/t/p/w500";
  article.style.backgroundImage = `url(${urlImage}${films[0].poster_path})`;
  const allGenres = await fetchGenreFilm(options);
  const genreFilm = nomGenres(allGenres,films[0].genre_ids);
  const article = document.createElement("article")
  article.style.backgroundImage = `url(${urlImage}${films[0].backdrop_path})`;

  
    
  const titre = document.createElement("h1");  //crée un élément HTML de manière dynamique
  titre.innerText = films[0].title;

  const release = document.createElement("h2");
  release.innerText = `Date de sortie : ${films[0].release_date}`; 
    
  const note = document.createElement("h3");
  note.innerText = `Note moyenne des spectateurs : ${films[0].vote_average} / 10`;

  const synopsis = document.createElement("p");
  synopsis.innerText = films[0].overview;

  const genre = document.createElement("p");
  genre.innerText = `Genre(s) du film : ${genreFilm.join(", ")}`
    
  section.appendChild(article)
  article.appendChild(titre); //Permet de placer l'élément créé correctement dans la structure HTML
  article.appendChild(release);
  article.appendChild(note);
  article.appendChild(synopsis);
  article.appendChild(genre);
    
}

//recuperer input avec un button 
document.querySelector("button").addEventListener('click', (evt)  =>{
    const inputElement = document.querySelector("#movie-search");
    const valeurInput = inputElement.value;
    evt.preventDefault();  //Evite le rafraichissement immédiat - comportement par défaut de form
    console.log(valeurInput);
    document.querySelector(".movie-card").innerHTML = "";
    fetchDataFilm(valeurInput);
})

hor();
setInterval(hor,1000);
affichageDate();
