import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("github-repo", "Integration | Component | github repo", {
  integration: true,
});

test("it renders", function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{github-repo}}`);

  assert.equal(
    this.$().text().trim(),
    `( Forks:
  
  Watchers:
  
  )`
  );
});
