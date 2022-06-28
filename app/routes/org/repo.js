import Ember from "ember";
import $ from "jquery";

export default Ember.Route.extend({
  model(params) {
    let org = this.modelFor("org");

    return $.get(
      `https://api.github.com/repos/${org.id}/${params.repoId}`
    ).then((rawRepo) => {
      // Backing up GitHub's numeric ID
      rawRepo.oldId = rawRepo.id;
      // Use the name of the repo as our ID
      rawRepo.id = rawRepo.name;

      return rawRepo;
    });
  },
});
