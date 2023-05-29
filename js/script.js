"use strict";



const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  showMyDB() {
    if (!this.privat) {
      console.log(this);
    }
  },
  writeYourGenres() {
    let counter = 0;
    while (counter <= 2) {
      const genre = prompt(`Ваш любимый жанр под номером ${counter+1}`)
      if (genre == null || genre.length == 0) {
        continue
      }
      counter ++;
      this.genres.push(genre);
    }
    this.genres.forEach((genre, i) => console.log(`Любимый жанр ${i+1} - это ${genre}`));
  },
  writeYourMovies() {
    let counter = 0;
    while (counter <= 5) {
      const movie = prompt("Один из последних просмотренных фильмов?", ""),
            rate = prompt("На сколько оцените его?", "");
    if (movie == null || rate == null || movie.length == 0 || rate.length == 0 || movie.length > 50) {
      continue;
    }
    counter++;
    this.movies[movie] = rate;
    }
  },
  toggleVisibleMyDB() {
    this.privat = !this.privat
  },
};




personalMovieDB.writeYourMovies();


// if (numberOfFilms < 10){
//   alert("Просмотрено довольно мало фильмов");
// } else if (numberOfFilms < 31) {
//   alert("Вы классический зритель");
// } else if (numberOfFilms > 30){
//   alert("Вы киноман");
// } else {
//   alert("Произошла ошибка")
// }


personalMovieDB.showMyDB();

let orangeBlock = document.getElementById('orangeBlock');
orangeBlock.style.height = '20px';
orangeBlock.style.width = '100%';
orangeBlock.style.backgroundColor = 'orange';

let movieTiles = document.getElementById('movieTiles');
movieTiles.style.display = 'flex';
movieTiles.style.flexWrap = 'wrap';
movieTiles.style.justifyContent = 'space-around';

for (let key in personalMovieDB.movies) {
  let tile = document.createElement('div');
  tile.style.flex = '1 0 20%';
  tile.style.border = '1px solid black';
  tile.style.margin = '10px';
  tile.style.padding = '10px';
  tile.style.boxSizing = 'border-box';
  tile.style.textAlign = 'center';

  let keyP = document.createElement('p');
  keyP.textContent = key;
  tile.appendChild(keyP);

  let valueP = document.createElement('p');
  valueP.textContent = `Рейтинг: ${personalMovieDB.movies[key]}`;
  tile.appendChild(valueP);

  movieTiles.appendChild(tile);
}

let orangeBlock2 = document.createElement('div');
orangeBlock2.style.height = '20px';
orangeBlock2.style.width = '100%';
orangeBlock2.style.backgroundColor = 'orange';
document.body.appendChild(orangeBlock2);


