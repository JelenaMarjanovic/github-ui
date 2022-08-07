import Ember from "ember";
import { test } from "qunit";
import moduleForAcceptance from "github-ui/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | index");

test("visiting /index", function async(assert) {
  visit("/");

  andThen(() => {
    assert.equal(currentRouteName(), "orgs", "At orgs route");
  });

  click('a[href*="org/emberjs"]');

  andThen(() => {
    assert.equal(currentURL(), "/org/emberjs/repos", "At repos page");
  });

  click('a[href*="org/emberjs/data"]');

  andThen(() => {
    assert.equal(currentURL(), "/org/emberjs/data/issues", "At issues page");
    assert.ok(Ember.$(".issues li").length > 0, "There's some issues");
  });

  click('a[href*="org/emberjs/data/contributors"]');

  andThen(() => {
    assert.equal(
      currentURL(),
      "/org/emberjs/data/contributors",
      "At contributors page"
    );
    assert.ok(
      Ember.$(".contributors li").length > 0,
      "There's some contributors"
    );
  });
});
