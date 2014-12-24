Tasks = new Mongo.Collection("tasks");
Category = new Mongo.Collection("category");
Race = new Mongo.Collection("race");

Category.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Category Name",
        max: 30
    },
    parent: {
        type: String,
        label: "Parent Category",
        optional: true
    },
    created: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            } else {
                this.unset();
            }
        },
        label: "Created Date"
    },
    description: {
        type: String,
        label: "Brief description",
        optional: true,
        max: 1000,
        autoform: {
            rows: 10
        }
    }
}));

Category.allow({
insert: function () {
    return true;
},

remove: function (){
    return true;    
},

update: function() {
    return true;    
}

});

Race.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Race Name",
        max: 30
    },
    category: {
        type: String,
        label: "Race Category",
        max: 30
    },
    raceDate: {
        type: Date,
        label: "Race Date"
    },
    contactEmail: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address",
        optional: true
    },
    website: {
        type: String,
        label: "Website",
        regEx: SimpleSchema.RegEx.Url,
        max: 100,
        optional: true
    },
    created: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            } else {
                this.unset();
            }
        },
        label: "Created Date"
    },
    modified: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date;
            }
        },
        label: "Modified Date",        
        optional: true
    },
    description: {
        type: String,
        label: "Brief description",
        optional: true,
        max: 1000,
        autoform: {
            rows: 10
        }
    }
}));

Race.allow({
insert: function () {
    return true;
},

remove: function (){
    return true;    
},

update: function() {
    return true;    
}

});
