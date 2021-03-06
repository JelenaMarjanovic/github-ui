/* eslint-disable no-console */
import Ember from "ember";

export default Ember.Service.extend({
  items: [],

  log() {
    console.log(
      this.get("items")
        .map((item) => item.id)
        .join(", ")
    );
  },

  favoriteItem(item) {
    this.get("items").addObject(item);
    this.log();
  },
  unfavoriteItem(item) {
    this.get("items").removeObject(item);
    this.log();
  },
});
