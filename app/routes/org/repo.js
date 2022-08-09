import Ember from "ember";

export default Ember.Route.extend({
  model(params) {
    let orgId = Ember.get(this.modelFor("org"), "login");

    return this.store.queryRecord("repo", {
      orgId,
      repoId: params.repoId,
    });
  },
});
