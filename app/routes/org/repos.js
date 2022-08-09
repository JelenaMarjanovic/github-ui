import Ember from "ember";

export default Ember.Route.extend({
  model() {
    let orgId = Ember.get(this.modelFor("org"), "login");

    return this.store.query("repo", {
      orgId,
    });
  },
});
