


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
    const article = document.querySelector(".films")

    const titre = document.createElement("h1")
    titre.innerText = films[0].overview

    article.appendChild(titre)
}




//recuperer input avec un button 
document.querySelector("button").addEventListener('click', ()  =>{
    const inputElement = document.querySelector("#inputText")
    const valeurInput = inputElement.value
    console.log(valeurInput)
    document.querySelector(".films").innerHTML = ""
    fetchDataFilm(valeurInput)

})


