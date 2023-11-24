


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTc1MDRkOTcwZDk4NTUyYmEwN2MzNTVmMzNmNzlmOSIsInN1YiI6IjY1NWIzN2I5ZWE4NGM3MTA5NmRmZGMyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJXzwWzMxRsckdVC3N3a2adGSP2pkZOzYDMD07pv6nU'
    }
  }
  
  async function fetchDataFilm(titreFilm) {
    const reponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${titreFilm}&include_adult=false&language=en-US&page=1`, options)
    const data = await reponse.json()
    const film = data.results
    
    genererfilm(film)
  }
   


function genererfilm(films){
    console.log(films[0].original_title)
    const article = document.querySelector(".movie-card")

    const description = document.createElement("h1")
    description.innerText = films[0].overview
    

    article.appendChild(description)
    
}




//recuperer input avec un button 
document.querySelector("button").addEventListener('click', ()  =>{
    const inputElement = document.querySelector("#movie-search")
    const valeurInput = inputElement.value
    event.preventDefault();
    console.log(valeurInput)
    document.querySelector(".movie-card").innerHTML = ""
    fetchDataFilm(valeurInput)

})

function hor() {
  let temps = new Date()
  let heures = temps.getHours()
  let minutes = temps.getMinutes()
  let secondes = temps.getSeconds()
  if (heures < 10) {
      heures = "0" + heures
  }
  if (minutes < 10) {
      minutes = "0" + minutes
  }
  if (secondes < 10) {
      secondes = "0" + secondes
  }
  let heureA = heures + ":" + minutes + ":" + secondes
  document.getElementById('horloge').textContent = heureA;
  setInterval("hor()",1000)
}
hor()
function d(){
let d = new Date();
let e = d.toLocaleDateString();
document.getElementById('date').textContent=e

} 
d()


