export async function fetchGenreFilm(options) {  //Récupère la liste des genres de film sous forme d'objet
    try {
      const reponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`,options)
      const data = await reponse.json();
      const genreList = data.genres;

      return genreList;
    }
    catch (error){
      console.error(error);
    }
  }

export function nomGenres(genreArray,genreIdFilm) {  //On map sur le tableau de genres pour extraire le nom de chaque mini tableau de genre
    return genreIdFilm.map((idGenre)=> {
        const genreFound = genreArray.find((objetGenre) => objetGenre.id === idGenre);
        return genreFound ? genreFound.name : null;
    })
}

export async function fetchTrailer(movie_id, options){
  try {
    const reponse = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`,options)
    const data = await reponse.json()
    const trailerMovie = data.results
    const urlYoutube = `https://www.youtube.com/embed/${trailerMovie[0].key}`
    console.log(data)

    return  trailerMovie[0].key ? urlYoutube : false;
  } catch (error) {
    console.error(error)
  }
}
