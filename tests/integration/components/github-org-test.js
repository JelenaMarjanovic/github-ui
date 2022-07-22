import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("github-org", "Integration | Component | github org", {
  integration: true,
});

test("it renders", function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{github-org}}`);

  assert.equal(
    this.$().text().trim(),
    `[
  Favorite
  ]`
  );
});
