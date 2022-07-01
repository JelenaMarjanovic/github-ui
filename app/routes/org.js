import Ember from "ember";
import $ from "jquery";

export default Ember.Route.extend({
  actions: {
    error(jqxhr) {
      if (jqxhr.status === 404) {
        this.intermediateTransitionTo("org.notfound");
      } else {
        return true; // bubble up
      }
    },
  },
  model(params) {
    return $.get(`https://api.github.com/orgs/${params.orgId}`).then(
      (rawOrg) => {
        // Backing up GitHub's numeric ID
        rawOrg.oldId = rawOrg.id;
        // Use the name of the repo as our ID
        rawOrg.id = rawOrg.name;

        return rawOrg;
      }
    );
  },
});
