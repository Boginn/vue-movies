<template>
  <div>

    <v-chip
      medium
      v-for="(genre_id, index) in genres"
      :key="index"
      class="ma-2 pa-3"
      :class="getGenre(genre_id).color"
    >
      {{ getGenre(genre_id).name }}
    </v-chip>
  </div>
</template>

<script>
import helpers from "../services/helpers.js";
export default {
  props: {
    genres: Array,
  },
  methods: {
    getGenre(id) {
      return helpers.getGenreById(id);
    },

  },
};


 
</script>

<style>

</style>