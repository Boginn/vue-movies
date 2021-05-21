<template>
  <v-carousel
    cycle
    height="525"
    hide-delimiters
    show-arrows-on-hover
    v-if="okay"
  >
    <v-carousel-item v-for="(movie, i) in movies" :key="i">
      {{ title }}
              <router-link class="white--text" :to="`../movie/${movie.id}`">asdf</router-link>

      
      <v-sheet color="primary" class="rounded-lg" elevation="10" height="100%">
        <v-row align="center" justify="center">
          <v-col class="display-1 ma-1 text-center">
            <v-col>
              <a
                class="white--text"
                :href="
                  `https://www.imdb.com/find?q=${movie.title}&ref_=nv_sr_sm`
                "
              >
                {{ movie.title }}</a
              >

            </v-col>

            <v-col>
              <a
                :href="
                  `https://www.imdb.com/find?q=${movie.title}&ref_=nv_sr_sm`
                "
              >
                <v-img

                  contain
                  height="250"
                  :src="sourcePath + movie.poster_path"
                ></v-img>
              </a>
              <GenresChips class="ma-1" :genres="movie.genre_ids"></GenresChips>
            </v-col>
          </v-col>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import data from "../data/data.js";
import helpers from "../services/helpers.js";
import GenresChips from "../components/GenresChips.vue";

export default {
  components: {
    GenresChips,
  },
  props: {
    id: Number,
    title: String,
    similar: Boolean,
  },
  created() {
    this.similar
      ? this.getSimilarMovies(this.id)
      : this.getRecommendations(this.id);
    this.okay = true;
  },
  computed: {
    sourcePath() {
      return helpers.assetSource;
    },
  },
  methods: {
    getSimilarMovies(id) {
      data.getSimilarMovies(id).then((res) => {
        this.movies = res.data.results;
      });
    },
    getRecommendations(id) {
      data.getRecommendations(id).then((res) => {
        this.movies = res.data.results;
      });
    },
  },
  data() {
    return {
      movies: [],
      okay: false,
    };
  },
};
</script>

<style></style>
