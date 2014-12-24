/*
Meteor.publish("races", function () {
  return Tasks.find({
    $or: [
      { private: {$ne: true} },
      { owner: this.userId }
    ]
  });
});
*/

Meteor.publish("categories", function () {
  return Category.find();
});

Meteor.publish("races", function () {
  return Race.find();
});