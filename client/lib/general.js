Template.registerHelper("categoryOptions", function() {
    return Category.find().map(function (category) {
        return {label: category.name, value: category.name};
    });
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MMMM DD, YYYY');
});

Template.registerHelper('getMonth', function(date){
    return moment(date).format('MMM');
});

Template.registerHelper('getDay', function(date){
    return moment(date).format('DD');
});

Template.registerHelper('getDayofWeek', function(date){
    return moment(date).format('ddd');
});
Template.registerHelper('getYear', function(date){
    return moment(date).format('YYYY');
});