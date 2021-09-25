"use strict";

const numberOfFilms = +prompt('How many films have you alredy wached?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const movie1 = prompt('One of the last wathed films:', ''),
      rate1 = prompt('How much do you rate it?', ''),
      movie2 = prompt('One more of the last wathed films:', ''),
      rate2 = prompt('How much do you rate it?', '');

personalMovieDB.movies[movie1] = rate1;
personalMovieDB.movies[movie2] = rate2;

console.log(personalMovieDB);
