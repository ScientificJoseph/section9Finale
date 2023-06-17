'use strict';
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie;
    console.log('info',info);
    console.log('otherPropsInMovie',otherProps);
    // const { title: movieTitle } = info;
    let { getFormattedTitle } = movie;
    getFormattedTitle = getFormattedTitle.bind(movie)
    let text = getFormattedTitle() + ' - ';
    for (const key in info) {
      if (key !== 'title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      console.log('this',this)
      return this.info.title.toUpperCase();
    }
  };

  movies.push(newMovie);
  renderMovies();
  document.querySelectorAll('#user-input input').forEach((input) => {
    return input.value = '';
  })

};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

// The Spread Operator

const person1 = {
  name: 'Joseph',
  hobbies: ['Juicing', 'Music']
};

const anotherPerson = person1; //shallow copy of object

person1.age = 50;

const person2 = { ...person1 }; //makes deep copy of Top level, shallow copy of nested

person1.age = 51;
person1.hobbies.push('Coding');

const person3 = {...person1, //makes deep copy of Top level
  age: 49, //ovewrites original object age property
  hobbies: [...person1.hobbies] // makes deep copy of array
};

person1.hobbies.pop()

// console.log(anotherPerson)
// console.log('person1',person1);
// console.log('person2',person2);
// console.log('person3',person3);

// Objectassign

const person4 = Object.assign({}, person1); //makes deep copy of Top level, shallow copy of Nested
person1.name = 'Joe';
person1.hobbies.push('Sleeping')
// console.log('person1',person1);
// console.log('person4',person4);
