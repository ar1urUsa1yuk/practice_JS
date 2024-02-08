'use strict';

//* створюємо змінну загальної кількості переглянутих фільмів, (+prompt)-якщо зарання знаємо що значення буде числове
const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

//! створюємо об'єкт із значенням, поміщаємо у count попередню змінну 
const personslMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//* створюємо змінні назва фільму та її оцінка 
const a = prompt('Один з останніх переглянутих фільмів?',''),
    b = prompt('На скільки оцінете його?',''),
    c = prompt('Один з останніх переглянутих фільмів?',''),
    d = prompt('На скільки оцінете його?','');

//! витягуємо із об'єкта { personslMovieDB } значення movies із змінною, та дорівнюємо це до оцінки із тої ж самої змінної
personslMovieDB.movies[a] = b;
personslMovieDB.movies[c] = d;

//* виводимо все у консоль
console.log(personslMovieDB);