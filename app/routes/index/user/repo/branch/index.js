import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let repo = this.modelFor('index.user.repo').get('fullName');
    let branch = this.modelFor('index.user.repo.branch').get('name');
    return this.get('store').query('github-content', {
      repo: repo,
      path: '/',
      ref: branch
    });
  },

  setupController(controller /* , model */) {
    controller.set('path', '/');
  }
});
