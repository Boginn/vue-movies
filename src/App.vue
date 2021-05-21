<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-spacer></v-spacer>
          <v-text-field
          class="shrink mr-2"
        label="Search"
        v-model="search"
        hide-details="auto"
      ></v-text-field>
      <v-icon>mdi-magnify</v-icon>
    <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="secondary">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  computed: {
  search: {
    get () {
      return this.$store.state.search;
    },
    set (value) {
      this.$store.commit('SEARCH', value);
    }
  }
},

  data: () => ({
    //
  }),
};
</script>

<style>
a {
  text-decoration: none;
}


</style>
