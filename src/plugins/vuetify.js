import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#2c4463",
        secondary: "#263c57",
        tertiary: "#597191",
        fourth: "#061427",
        fifth: "#0c2649",

        accent: "#7391c3",


        error: "e42315",
        
        success: "#24aa0e",
      },
    },
  },
});
