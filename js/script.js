"use strict";

const blockItems = document.querySelectorAll('.block-item'),
      wrapper = document.querySelector('.wrapper-blocks');



blockItems[0].style.backgroundColor = 'blue';
blockItems[1].style.display = 'flex';
blockItems[1].style.justifyContent = 'center';
blockItems[1].style.alignItems = 'center';
blockItems[1].style.width = '400px';
blockItems[2].style.cssText = "border-radius: 50%"

const newItem = document.createElement('div');
const newItem2 = document.createElement('div');

newItem.classList.add('new-block-item');
newItem2.classList.add('new-block-item-2')

blockItems.forEach(item => {
  item.style.borderRadius = '5%';
})

wrapper.append(newItem);
wrapper.prepend(newItem2);

wrapper.style.alignItems = 'center';

blockItems[0].addEventListener('click', () => {
  alert('Click');
});














// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  showMyDB: function() {
    if  (!this.privat) {
      console.log(this);
    }
  },
  writeYourGenres: function() {
    let counter = 0;
    while (counter <= 2) {
      const genre = prompt(`Ваш любимый жанр под номером ${counter+1}`)
      if (genre == null || genre.length == 0) {
        continue
      }
      counter ++;
      this.genres.push(genre);
    }
    this.genres.forEach(function(item, iter){
      alert(`Любимый жанр ${iter + 1} - это ${item}`);
    });
  },
  writeYourMovies: function() {
    while (counter < 2) {
      const movie = prompt("Один из последних просмотренных фильмов?", ""),
          rate = prompt("На сколько оцените его?", "");
      if (movie.length == 0 || rate.length == 0 || movie == null || rate == null || movie.length > 50) {
        continue;
      }
      counter++;
      this.movies[movie] = rate;
    }
  },
  writeWatchedFilms: function() {
    if (numberOfFilms < 10){
      alert("Просмотрено довольно мало фильмов");
    } else if (numberOfFilms < 31) {
      alert("Вы классический зритель");
    } else if (numberOfFilms > 30){
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка")
    }
  },
  toggleVisibleMyDB: function() {
    if (this.privat) {
      this.privat = false;
    } else {
      this.privat = true;
    }
  }
  },
  counter = 0;



// personalMovieDB.writeYourMovies();
// personalMovieDB.writeYourGenres();
// personalMovieDB.writeWatchedFilms();




// personalMovieDB.showMyDB();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB();


// --------------------------------------------------------------------------------------------------------


// document.getElementById(''); - получение элемента по id
// document.querySelectorAll('') - получить псевдосписок элементов по любому селектору
// document.querySelector('') - получение первого элемента по селектору
// что-то.style.названиеСтиля - изменение стиля inline
