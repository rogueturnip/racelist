Meteor.subscribe("categories");

Template.showCategory.helpers({
  categories: function () {
      return Category.find();
  },
});