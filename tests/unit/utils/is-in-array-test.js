import Ember from "ember";
import isInArray from "github-ui/utils/is-in-array";
import { module, test } from "qunit";

module("Unit | Utility | is in array");

// Replace this with your real tests.
test("it works", function (assert) {
  assert.expect(3);

  const Type = Ember.Object.extend({
    item: 6,
    list: [1, 2, 3],
    isItemInList: isInArray("item", "list"),
  });

  const obj = Type.create();

  assert.equal(obj.get("isItemInList"), false, "Initial check for not-in-list");

  obj.get("list").addObject(6);

  assert.equal(obj.get("isItemInList"), true, "Check for is-in-list");

  obj.set("item", 52);

  assert.equal(
    obj.get("isItemInList"),
    false,
    "After changing the item, it's not-in-list anymore"
  );
});
