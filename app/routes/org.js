import Ember from "ember";
import $ from "jquery";

export default Ember.Route.extend({
  model(params) {
    return $.get(`https://api.github.com/orgs/${params.orgId}`).then(
      (rawOrg) => {
        // Backing up GitHub's numeric ID
        rawOrg.oldId = rawOrg.id;
        // Use the name of the repo as our ID
        rawOrg.id = rawOrg.name;

        // eslint-disable-next-line no-unused-vars
        return new Ember.RSVP.Promise((resolve, reject) => {
          Ember.run.later(() => {
            resolve(rawOrg);
          }, 1000);
        });
      }
    );
  },
});
