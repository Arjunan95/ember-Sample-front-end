import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | statepage', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:statepage');
    assert.ok(controller);
  });
});
