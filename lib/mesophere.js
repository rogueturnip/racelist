Mesosphere({
    name: 'taskSubmit',
    method: 'taskForm',
    template: 'addRace',
    fields: {
        text: {
            required: true,
            message: 'Please enter something'
        },
        text2: {
            required: true,
            message: "Please enter something else"
        }
    },
  onSuccess: function(formData, formHandle){
     //custom code here
    $("#taskModal").modal("hide"); 
    Router.go("/");
    Mesosphere.Utils.successCallback(formData, formHandle);
  }
});