import Ember from "ember";
import config from "./config/environment";

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  // LIST OF ORGS
  this.route("orgs"); //  /orgs

  // INDIVIDUAL ORG
  this.route("org", { path: "org/:orgId" }, function () {
    // LIST OF REPOS
    this.route("repos"); //  /org/repos

    // INDIVIDUAL REPO
    this.route("repo", { path: ":repoId" }, function () {
      this.route("issues"); //  /org/emberjs/ember.js/issues
      this.route("contributors"); //  /org/emberjs/ember.js/contributors
    }); //  /org/emberjs/ember.js
  }); //  /org/emberjs

  this.route("notfound", { path: "*path" });
});

export default Router;
