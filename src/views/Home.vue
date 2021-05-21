<template>
  <v-container>


    <div>
      <Movies ></Movies>
    </div>
    <!-- router link instead here for Movies and Tv Shows -->

  </v-container>
</template>

<script>
import helpers from "../services/helpers.js";
import Movies from './Movie/Movies.vue';

export default {
  name: "Home",
  components: {
    Movies,
  },

  watch: {

  },

  computed: {
    popular: {
      get() {
        return this.$store.state.popular;
      },
      set(value) {
        this.$store.commit("SET_POPULAR", value);
      },
    },
    playing: {
      get() {
        return this.$store.state.playing;
      },
      set(value) {
        this.$store.commit("SET_PLAYING", value);
      },
    },
    upcoming: {
      get() {
        return this.$store.state.upcoming;
      },
      set(value) {
        this.$store.commit("SET_UPCOMING", value);
      },
    },


    sourcePath() {
      return helpers.assetSource;
    },
    movies() {
      if (this.upcoming) {
        this.getUpcoming();

        return this.$store.getters.upcomingMovies;
      } else if (this.playing) {
        this.getNowPlaying();

        return this.$store.getters.nowPlaying;
      } else {
        this.getPopularMovies();

        return this.$store.getters.popularMovies;
      }
    },
  },

  data: function() {
    return {
      

    };
  },
  methods: {

  },
  created() {},
};
</script>
