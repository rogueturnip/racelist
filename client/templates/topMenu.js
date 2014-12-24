Template.topMenu.helpers({
  incompleteCount: function () {
    return Tasks.find({checked: {$ne: true}}).count();
  } 
});
Template.topMenu.events({
  "change .hide-completed input": function (event) {
    Session.set("hideCompleted", event.target.checked);
  }
});