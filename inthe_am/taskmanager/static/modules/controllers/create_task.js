var controller = Ember.ObjectController.extend({
  needs: ['tasks'],
  priorities: [
    {short: '', long: '(none)'},
    {short: 'L', long: 'Low'},
    {short: 'M', long: 'Medium'},
    {short: 'H', long: 'High'},
  ],
  actions: {
    'save': function() {
      var model = this.get('model');
      var self = this;
      $('#new_task_form').foundation('reveal', 'close');
      model.save().then(function(){
        self.transitionToRoute('task', model);
      }, function(){
        alert("An error was encountered while saving your task.");
      });
    }
  }
});

module.exports = controller;
