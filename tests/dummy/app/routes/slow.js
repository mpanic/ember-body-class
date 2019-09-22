import Route from '@ember/routing/route';
import BodyClassMixin from 'ember-body-class/mixins/body-class';

export default Route.extend(BodyClassMixin, {
  model() {
    return new Promise(function(resolve) {
      setTimeout(() => resolve("done!"), 300);
    });
  }
});
