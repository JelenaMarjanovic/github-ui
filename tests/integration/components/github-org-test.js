import Ember from "ember";
import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("github-org", "Integration | Component | github org", {
  integration: true,
});

test("it renders", function (assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{github-org}}`);

  assert.equal(
    this.$().text().trim(),
    `[
  Favorite
  ]`,
    "Inline syntax, basic rendering"
  );

  // Template block usage:
  this.render(hbs`
    {{#github-org}}
      template block text
    {{/github-org}}
  `);

  assert.equal(
    this.$().text().trim(),
    `[
  Favorite
  ]`,
    "Block syntax, basic rendering"
  );
});

test("bindings update data", function (assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  const org = Ember.Object.create({
    id: "my-org",
  });

  this.set("o", org);

  this.render(
    hbs`{{github-org org=o on-favorite-clicked=on-favorite-clicked}}`
  );

  assert.equal(Ember.$(".github-org a").text(), "my-org");

  // Ember.run(() => {
  //   org.set("id", "other");
  //   assert.equal(Ember.$(".github-org a").text(), "other");
  // });

  let actionCount = 0;
  this.set("on-favorite-clicked", function () {
    actionCount++;
  });

  Ember.$(".github-org span").click();

  assert.equal(actionCount, 1, "Action was fired once");
});
