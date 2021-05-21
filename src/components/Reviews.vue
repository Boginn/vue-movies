<template>
<div>
    <span
      class="btn d-flex justify-end"
      v-bind:class="[show ? 'active' : 'btn']"
      
      @click="toggle()"
    >
      .reviews &dArr;
    </span>
  <v-container>

    <div v-if="show">
      <v-card
        color="fifth"
        class="ma-2"
        v-for="review in reviews"
        :key="review.id"
      >
        <v-card-text class="fourth">
          {{ review.author }} - {{ review.created_at }}
          <v-spacer></v-spacer>
          <span v-if="review.author_details.rating">
            Rating: {{ review.author_details.rating }}/10 </span
          >
        </v-card-text>
        <v-card-text>
          {{ review.content }}
        </v-card-text>
        <p></p>
      </v-card>
    </div>
  </v-container>
</div>
</template>

<script>
import data from "../data/data.js";

export default {
  components: {},
  props: {
    id: Number,
  },
  created() {
    this.getReviews(this.id);
  },

  computed: {},

  methods: {
    toggle() {
      this.show = !this.show;
    },
    getReviews(id) {
      data.getReviews(id).then((res) => {
        this.reviews = res.data.results;
        console.log(res.data.results);
      });
    },
  },
  data() {
    return {
      show: false,
      reviews: undefined,
    };
  },
};
</script>

<style>
.btn {
  cursor: pointer;
  padding: 8px;
  background-color: #16191fa8;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.btn:hover,
.active {
  background-color: rgba(4, 9, 20, 0.733);
}
</style>
