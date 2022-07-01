import Ember from "ember";

export default Ember.Route.extend({
  favorites: Ember.inject.service(),
  actions: {
    favoriteClicked(org) {
      this.get("favorites").favoriteItem(org);
    },
  },
  model() {
    // eslint-disable-next-line no-unused-vars
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.run.later(() => {
        resolve([
          {
            id: "emberjs",
          },
          {
            id: "ember-cli",
          },
          {
            id: "microsoft",
          },
          {
            id: "yahoo",
          },
          {
            id: "netflix",
          },
          {
            id: "facebook",
          },
        ]);
      }, 1000);
    });
  },
});
