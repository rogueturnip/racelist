Meteor.subscribe("races");

Template.showRace.helpers({
  races: function () {
      return Race.find({}, {"sort": [['raceDate','dsc']]});
  },
  yearSame: function (date) {
  },
  monthSame: function (date) {
  }
});