import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | screen4', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:screen4');
    assert.ok(route);
  });
});
