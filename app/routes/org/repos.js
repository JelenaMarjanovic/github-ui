import Ember from "ember";
import $ from "jquery";

export default Ember.Route.extend({
  model() {
    let orgId = Ember.get(this.modelFor("org"), "login");

    return $.get(`https://api.github.com/orgs/${orgId}/repos`).then(
      (rawRepos) => {
        return rawRepos.map((rawRepo) => {
          rawRepo.oldId = rawRepo.id;
          rawRepo.id = rawRepo.name;

          return rawRepo;
        });
      }
    );
  },
});
