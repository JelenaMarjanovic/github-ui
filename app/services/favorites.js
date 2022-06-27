/* eslint-disable no-console */
import Ember from "ember";

export default Ember.Service.extend({
  items: [],

  favoriteItem(item) {
    this.get("items").addObject(item);

    console.log(
      this.get("items")
        .map((item) => item.id)
        .join(", ")
    );
  },
});
