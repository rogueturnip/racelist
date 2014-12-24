Template.registerHelper("categoryOptions", function() {
    return Category.find().map(function (category) {
        return {label: category.name, value: category.name};
    });
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MMMM DD, YYYY');
});