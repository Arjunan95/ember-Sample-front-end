import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('screen4');
  this.route('screen5');
  this.route('centralpage');
  this.route('homepage');
  this.route('statepage');
  this.route('rationshoppage');
  this.route('mytranspage');
  this.route('page1');
  this.route('page2');
});

export default Router;
