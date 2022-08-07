import Ember from "ember";
import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("github-repo", "Integration | Component | github repo", {
  integration: true,
});

test("it renders", function (assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  const repo = Ember.Object.create({
    forks_count: 32,
    watchers_count: 99,
    name: "test repo",
  });
  this.set("repo", repo);

  this.render(hbs`{{github-repo repo=repo}}`);

  assert.equal(
    this.$().text().trim(),
    `( Forks:
  32
  Watchers:
  99
  )`,
    "Inline syntax, basic rendering"
  );

  // Template block usage:
  this.render(hbs`
    {{#github-repo repo=repo}}
      template block text
    {{/github-repo}}
  `);

  assert.equal(
    this.$().text().trim(),
    `template block text





  ( Forks:
  32
  Watchers:
  99
  )`,
    "Block syntax, basic rendering"
  );
});
