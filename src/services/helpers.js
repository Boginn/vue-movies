import data from "../data/data.js";

export default {
  getGenreById(parameter) {
    let obj = { color: "grey", name: "" };
    let id;
    if (typeof parameter === "object") {
      id = parameter.id;
    } else if (typeof parameter === 'string') {
      id = parseInt(parameter);
    } else {
      id = parameter;

    }

    data.genres.forEach((g) => {
      if (g.id == id) {
        obj = g;
      }
    });

    return obj;
  },
  assetSource: 'https://image.tmdb.org/t/p/original/',
};
