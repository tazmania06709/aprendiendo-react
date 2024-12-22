## Enunciado

Crea una aplicacion para buscar peliculas

API a usar

- https://www.omdbapi.com
- API_KEY: Here is your key: 91380b1a


Requerimientos:

- Necesita mostrar un input para buscar peliculas y un boton para buscar. ------Listo
- Lista las peliculas encontradas y muestra el titulo, anno y poster.
   url:https://www.omdbapi.com/?apikey=91380b1a&s=avengers
   
- Haz que las peliculas se mustren en un grid responsive.

Primera iteracion:
- Evitar que se haga la misma busqueda dos veces seguidas.
- Haz que la busqueda se haga automaticamente al escribir.
- Evitar que se haga la busqueda continuamente al escribir (debounce)








// 20241215215412
// https://www.omdbapi.com/?i=tt3896198&apikey=91380b1a

{
  "Title": "Guardians of the Galaxy Vol. 2",
  "Year": "2017",
  "Rated": "PG-13",
  "Released": "05 May 2017",
  "Runtime": "136 min",
  "Genre": "Action, Adventure, Comedy",
  "Director": "James Gunn",
  "Writer": "James Gunn, Dan Abnett, Andy Lanning",
  "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
  "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
  "Language": "English",
  "Country": "United States",
  "Awards": "Nominated for 1 Oscar. 15 wins & 60 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "7.6/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "85%"
    },
    {
      "Source": "Metacritic",
      "Value": "67/100"
    }
  ],
  "Metascore": "67",
  "imdbRating": "7.6",
  "imdbVotes": "777,934",
  "imdbID": "tt3896198",
  "Type": "movie",
  "DVD": "N/A",
  "BoxOffice": "$389,813,101",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}