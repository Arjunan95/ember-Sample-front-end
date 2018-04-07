import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | rationshoppage', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:rationshoppage');
    assert.ok(route);
  });
});
