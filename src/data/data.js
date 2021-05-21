import axios from 'axios'

const movieAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '57764d348dfb561af849d225e4a51e15',
        adult: false,
        language: 'en-US',
        
    }
})

export default {
    getLatestMovie() {
        return movieAPI.get('/movie/latest');
    },

    //array
    getNowPlayingMovies() {
        return movieAPI.get('/movie/now_playing');
    },
    getPopularMovies() {
        return movieAPI.get('/movie/popular');
    },
    getUpcomingMovies() {
        return movieAPI.get('/movie/upcoming');
    },
    getTopRatedMovies() {
        return movieAPI.get('/movie/top_rated');
    },

    //objects by id
    getMovieDetails(id) {
        return movieAPI.get(`/movie/${id}`);
    },
    getReviews(id) {
        return movieAPI.get(`/movie/${id}/reviews`);
    },

    getSimilarMovies(id) {
        return movieAPI.get(`/movie/${id}/similar`);
    },
    getRecommendations(id) {
        return movieAPI.get(`/movie/${id}/recommendations`);
    },
    genres: [
        {
          id: 28,
          name: "Action",
          color: "red",
        },
        {
          id: 12,
          name: "Adventure",
          color: "green",
        },
        {
          id: 16,
          name: "Animation",
          color: 'purple',
        },
        {
          id: 35,
          name: "Comedy",
          color: "blue",
        },
        {
          id: 80,
          name: "Crime",
          color: 'red darken-4',
        },
        {
          id: 99,
          name: "Documentary",
          color: 'teal',
        },
        {
          id: 18,
          name: "Drama",
          color: 'yellow',
        },
        {
          id: 10751,
          name: "Family",
          color: 'yellow accent-3',
        },
        {
          id: 14,
          name: "Fantasy",
          color: "pink",
        },
        {
          id: 36,
          name: "History",
          color: 'brown',
        },
        {
          id: 27,
          name: "Horror",
          color: 'deep-orange',
        },
        {
          id: 10402,
          name: "Music",
          color: 'blue-grey',
        },
        {
          id: 9648,
          name: "Mystery",
          color: 'light-green',
        },
        {
          id: 10749,
          name: "Romance",
          color: 'red lighten-3',
        },
        {
          id: 878,
          name: "Science Fiction",
          color: 'cyan',
        },
        {
          id: 10770,
          name: "TV Movie",
          color: 'lime',
        },
        {
          id: 53,
          name: "Thriller",
          color: 'amber',
        },
        {
          id: 10752,
          name: "War",
          color: 'orange darken-3',
        },
        {
          id: 37,
          name: "Western",
          color: 'orange',
        },
      ],
      
}