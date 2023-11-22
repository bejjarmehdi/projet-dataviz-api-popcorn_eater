

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTc1MDRkOTcwZDk4NTUyYmEwN2MzNTVmMzNmNzlmOSIsInN1YiI6IjY1NWIzN2I5ZWE4NGM3MTA5NmRmZGMyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJXzwWzMxRsckdVC3N3a2adGSP2pkZOzYDMD07pv6nU'
    }
  }
  
   fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&      include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99', options)
    .then(response => response.json())
    .then(json => dynamiqueCard(json))
    .catch(err => console.error(err))


function dynamiqueCard(json){
    const film = json.results
    genererfilm(film)
  
}


async function genererfilm(film){
    for(let i = 0 ; i < 5; i++){
        const article = film[i]
        const sectionFiches = document.querySelector(".films")
        const filmElement = document.createElement("article")
        // const response= await fetch(`https://image.tmdb.org/t/p/w500${article.poster_path}`,options)
        // const img = await response.json()

        // const imageElement = document.createElement("img")
        // imageElement.src = img

        const nomElement = document.createElement("h2")
        nomElement.innerText = article.original_title

        const adultElement = document.createElement("p")
        adultElement.innerText = `${article.adult != true ? "mineur okay" : "hohoho cochon-ne !"}`

        const dateElement = document.createElement("p")
        dateElement.innerText = article.release_date

    
        sectionFiches.appendChild(filmElement)
        // filmElement.appendChild(imageElement)
        filmElement.appendChild(nomElement)
        filmElement.appendChild(adultElement)
        filmElement.appendChild(dateElement)
    
    }
}