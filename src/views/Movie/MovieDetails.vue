<template>
  <div v-if="movie">
    <div class="ma-16">
      <v-row>

        <v-col>
          <!-- <v-img style="background-size: contain;" height="250" :src="sourcePath + movie.backdrop_path"></v-img> -->
          <v-sheet
            class="ma-3"
            :style="
              `background: url(${sourcePath +
                movie.backdrop_path}) no-repeat center center; height: 250px; background-size: cover;`
            "
          ></v-sheet>
          <v-col>

          <h1>{{ movie.title }}</h1>
          
          </v-col>
          <GenresChips :genres="movie.genres"></GenresChips>
          <v-card elevation="1" tile >
            <v-card-text>
              {{ movie.overview }}
            </v-card-text>
            <v-card-text v-if="movie.original_title != movie.title"
              >Original Title: {{ movie.original_title }}</v-card-text
            >
            <v-card-text>
              <div>
                Rating: {{ movie.vote_average }} ({{ movie.vote_count }} votes)
              </div>
              <div>Released: {{ movie.release_date }}</div>
              <div>Languague: {{ movie.original_language }}</div>
            </v-card-text>
          </v-card>

              <Reviews :id="id"></Reviews>

        </v-col>
        <v-col cols="3">
          <Carousel :title="'.recommendations'" :id="id" :similar="false"> </Carousel>
          <Carousel :title="'.similar'" :id="id" :similar="true"> </Carousel>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import GenresChips from "../../components/GenresChips.vue";
import Carousel from "../../components/Carousel.vue";
import Reviews from "../../components/Reviews.vue";

import helpers from "../../services/helpers.js";

export default {
  components: {
    GenresChips,
    Carousel,
    Reviews,
  },
  created() {
      console.log('created')
    this.id = this.$route.params.id;
    this.id = parseInt(this.id);
    this.$store.dispatch("getMovieDetails", this.id);
  },
  computed: {
    sourcePath() {
      return helpers.assetSource;
    },
    movie() {
      return this.$store.getters.lastMovie;
    },
  },
  data: function() {
    return {
      id: undefined,
      similarMovies: undefined,
    };
  },
};
</script>

<style>

</style>
