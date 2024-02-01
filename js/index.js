const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

const personslMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останніх переглянутих фільмів?',''),
    b = prompt('На скільки оцінете його?',''),
    c = prompt('Один з останніх переглянутих фільмів?',''),
    d = prompt('На скільки оцінете його?','');

personslMovieDB.movies[a] = b;
personslMovieDB.movies[c] = d;

console.log(personslMovieDB);