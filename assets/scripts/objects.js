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
    let text = movie.info.title + ' - ';
    for (const key in movie.info) {
      if (key !== 'title') {
        text = text + `${key}: ${movie.info[key]}`;
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
    id: Math.random()
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

const person = {
  name: 'Joseph',
  hobbies: ['Juicing', 'Music']
};

const anotherPerson = person; //shallow copy of object

person.age = 50;

const person2 = { ...person } //makes deep copy of Top level, shallow copy of nested

person.age = 51;
person.hobbies.push('Coding');

const person3 = {...person, //makes deep copy of Top level
  age: 49, //ovewrites original object age property
  hobbies: [...person.hobbies] // makes deep copy of array
};

person.hobbies.pop()

// console.log(anotherPerson)
console.log('person',person);
console.log('person2',person2);
console.log('person3',person3)

// Objectassign
