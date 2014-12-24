AutoForm.addHooks(["addCategoryForm", "updateCategoryForm"], {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "remove", or the method name.
    onSuccess: function(operation, result, template) {
        Router.go("showCategory");
    }, 
});

AutoForm.addHooks(["addRaceForm", "updateRaceForm"], {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "remove", or the method name.
    onSuccess: function(operation, result, template) {
        Router.go("showRace");
    }, 
});