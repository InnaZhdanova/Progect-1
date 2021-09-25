"use strict";

const numberOfFilms = +prompt('How many films have you alredy wached?', '');

eval.document.write('You have already wathed ' + numberOfFilms + ' films');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};