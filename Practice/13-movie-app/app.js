const API_URL =
  "https:api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&";

//apikey=https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=dc64f959550f3b39b0633777c83849c3#

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
/*
expired oldu bu arkadaslar
const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOThjODdhNDdjNzQ1YmE0ZWY3NDQzZjA1MDc0NzVlNCIsInN1YiI6IjY0YTQ5MDc3MTU4Yzg1MDBlMjRhMjE2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bIy4q-QpU3Q3qfFRAlOAzfcVgPKyrngYhnAK3gg6abE",
    },
  }; */

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzY0Zjk1OTU1MGYzYjM5YjA2MzM3NzdjODM4NDljMyIsInN1YiI6IjY0YTQ5MDc3MTU4Yzg1MDBlMjRhMjE2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vDftJp7IIiV09L83kfq6dLgliSnYbmrOj5H9BrpQ26c",
  },
};

let form = document.getElementById("form");
let search = document.getElementById("search");
let main = document.getElementById("main");

const getMovies = (url) => {
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);

      if (data.results && data.results.length > 0) {
        showMovies(data.results);
      } else {
        alert("No results found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

getMovies(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let searchTerm = search.value;
  if (searchTerm) {
    let SEARCH_API = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`;
    getMovies(SEARCH_API);

    search.value = "";
  } else {
    window.location.reload();
  }
});

//'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'

const showMovies = (movies) => {
  main.innerHTML = "";
  movies.forEach((movie) => {
    let imageContent = movie.poster_path
      ? `
 <img  src="${IMG_PATH + movie.poster_path}" alt="${movie.title}" />`
      : `
 <img src="https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=20&m=911590226&s=612x612&w=0&h=HlJtSKF-fLsKFy1QJ-EVnxXkktBKNS-3jUQPXsSasYs="
            alt="Movie Image">
 
 `;

    let movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
   ${imageContent}
   <div class="movie-info">
   <h3 >${movie.title}</h3>
   <span class="${getRate(movie.vote_average)}">${movie.vote_average}</span>
</div>
<div class="overview">
   <h3>${movie.overview} <smal>Overview</smal> </h3>
   <p>${movie.title}</p>
</div>

   `;
    main.appendChild(movieEl);
  });
};

const getRate = (vote) => {
  if (vote >= 7) {
    return "green";
  } else if (vote >= 5) {
    return "gold";
  } else {
    return "crimson";
  }
};
