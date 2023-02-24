let numberOfFilms = +prompt("how many movie did you watch?");
let lastWatchedFilm;
let markFilm;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    lastWatchedFilm = prompt("what is your last watched film?");
    markFilm = +prompt("give a mark for him");
    personalMovieDB.movies[lastWatchedFilm] = markFilm;
};

console.log(numberOfFilms);
console.log(personalMovieDB);