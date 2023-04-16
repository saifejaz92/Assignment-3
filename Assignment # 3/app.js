(async function (){
    const response = await fetch("./movies.json");
    const movies = await response.json();

    const genreElem = document.getElementById("genre");
    const yearElem = document.getElementById("year");
    const langEleme = document.getElementById("language");
    const ratingElem = document.getElementById("rating");
    const btnElem = document.getElementById("search");

    function displayMovies(genre, rating, releaseYear) {
  const filteredMovies = movies.filter(movies => {
    return movies.genre === genre && movies.rating >= rating && movies.releaseYear >= releaseYear;
  });
}

    btnElem.addEventListener("click",displayMovies);
});