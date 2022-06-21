import Ember from "ember";
import config from "./config/environment";

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route("orgs"); //  /orgs
  this.route("org", { path: "org/:id" }, function () {
    //  /org/emberjs
    this.route("repos"); //  /org/repos
    this.route("repo", { path: ":id" }, function () {
      //  /org/emberjs/ember.js
      this.route("issues"); //  /org/emberjs/ember.js/issues
      this.route("contributors"); //  /org/emberjs/ember.js/contributors
    });
  });
});

export default Router;
