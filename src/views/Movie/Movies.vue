<template>
  <v-container>
    <nav class="text-center">
      <span v-for="page in pages" :key="page.name">
        <v-btn class="ma-1" outlined @click="page.function">
          {{ page.name }}
        </v-btn>
      </span>
    </nav>

    <div>
      <v-row v-if="movies">
        <v-col
          :sm="smInt"
          :md="mdInt"
          class="mt-5"
          v-for="movie in movies.results"
          :key="movie.id"
        >
          <div v-if="movie.title.toLowerCase().includes(search.toLowerCase())">
            <v-card class="fourth">
              <router-link class="white--text" :to="`movie/${movie.id}`">
                <v-img
                  :src="sourcePath + movie.backdrop_path"
                  :style="
                    `background: url(${sourcePath +
                      movie.backdrop_path}) no-repeat center center; height: 100%; width: 100%;`
                  "
                ></v-img>
                <v-card-title class="d-flex justify-center">
                  {{ movie.title }}
                </v-card-title>
              </router-link>
              <genres-chips
                class="d-flex justify-center pb-5"
                :genres="movie.genre_ids"
              />
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import GenresChips from "../../components/GenresChips";
import helpers from "../../services/helpers.js";

export default {
  name: "Movies",
  components: {
    GenresChips,
  },

  watch: {
    search() {
      if (this.search.length > 1) {
        this.smInt = 12;
        this.mdInt = 12;
      } else {
        this.smInt = 6;
        this.mdInt = 4;
      }
    },
    movies() {},
  },

  computed: {
    search() {
      return this.$store.getters.search;
    },
    sourcePath() {
      return helpers.assetSource;
    },
    user() {
      return this.$store.getters.user;
    },
    movies() {
      return this.$store.getters.movieList;
    },
    pages() {
      return [
        {
          name: "popular",
          function: () => {
            this.$store.dispatch("getPopularMovies");
          },
        },
        {
          name: "now playing",
          function: () => {
            this.$store.dispatch("getNowPlayingMovies");
          },
        },
        {
          name: "upcoming",
          function: () => {
            this.$store.dispatch("getUpcomingMovies");
          },
        },
        {
          name: "top rated",
          function: () => {
            this.$store.dispatch("getTopRatedMovies");
          },
        },
      ];
    },
  },

  data: function() {
    return {
      smInt: 6,
      mdInt: 4,
    };
  },
  methods: {},
  created() {
    this.$store.dispatch("getPopularMovies");
  },
};
</script>
