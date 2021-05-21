import Vue from "vue";
import Vuex from "vuex";
import data from "../data/data";
// const axios = require('axios');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
    user: undefined,
    movieList: undefined,
    popularMovies: undefined,
    upcomingMovies: undefined,
    latestMovies: undefined,
    nowPlaying: undefined,
    lastMovie: undefined,
    similarMovies: undefined,
    recommendations: undefined,
popular: undefined,
playing: undefined,
    upcoming: undefined,
  },
  mutations: {
    SET_POPULAR(state) {
      state.popular = true;
      state.playing = false;
      state.upcoming = false;
    },
    SET_PLAYING(state) {
      state.popular = false;
      state.playing = true;
      state.upcoming = false;
    },
    SET_UPCOMING(state) {
      console.log('s!')

      state.popular = false;
      state.playing = false;
      state.upcoming = true;
    },

    SEARCH(state, payload) {
      state.search = payload;
    },
    SET_LAST_MOVIE(state, payload) {
      state.lastMovie = payload;
    },
    SET_LATEST_MOVIE(state, payload) {
      state.latestMovie = payload.movies;
    },

    SET_MOVIE_LIST(state, payload) {
      state.movieList = payload.movies;
    },


    SET_SIMILAR_MOVIES(state, payload) {
      state.similarMovies = payload;
    },
    SET_RECOMMENDATIONS(state, payload) {
      state.recommendations = payload;
    },
  },
  actions: {

    getPopularMovies(context, payload) {
      data.getPopularMovies(payload).then((results) => {
        context.commit("SET_MOVIE_LIST", { movies: results.data });
      });
    },
    getNowPlayingMovies(context, payload) {
      data.getNowPlayingMovies(payload).then((results) => {
        context.commit("SET_MOVIE_LIST", { movies: results.data });
      });
    },
    getUpcomingMovies(context, payload) {
      data.getUpcomingMovies(payload).then((results) => {
        context.commit("SET_MOVIE_LIST", { movies: results.data });
      });
    },
    getTopRatedMovies(context, payload) {
      data.getTopRatedMovies(payload).then((results) => {
        context.commit("SET_MOVIE_LIST", { movies: results.data });
      });
    },

    getMovieDetails(context, payload) {
      data.getMovieDetails(payload).then((results) => {
        context.commit("SET_LAST_MOVIE", results.data);
      });
    },
    getSimilarMovies(context, payload) {
      data.getSimilarMovies(payload).then((results) => {
        context.commit("SET_SIMILAR_MOVIES", results.data.results);
      });
    },
    getRecommendations(context, payload) {
      data.getRecommendations(payload).then((results) => {
        context.commit("SET_RECOMMENDATIONS", results.data.results);
      });
    },
  },
  getters: {
    search(state) {
      return state.search;
    },
    user(state) {
      return state.prefix + " " + state.user;
    },
    movieList(state) {
      return state.movieList;
    },

    playerName(state) {
      return state.playerName;
    },
    lastMovie(state) {
      return state.lastMovie;
    },
    similarMovies(state) {
      return state.similarMovies;
    },
    recommendations(state) {
      return state.recommendations;
    },
  },
});
