Meteor.methods({
  taskForm: function (rawData) {
    Mesosphere.taskSubmit.validate(rawData, function(errors, formData){
        if(!errors){
            console.log("No Errors Found");
            //Do what you want with the validated data.
            //var text = event.target.text.value;
            var text = formData.text;
            formData.text ="";
            Meteor.call("addTask", text);
            // Clear form
//            event.target.text.value = "";
//            event.target.text2.value = "";
            // Prevent default form submit
//            event.preventDefault();
//            return false;
        }else{
            _(errors).each( function( value, key ) {
              console.log(key+": "+value.message);
            });
        }
    });
  }
});