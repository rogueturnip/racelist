Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'defaultLayout',

  // the appNotFound template is used for unknown routes and missing lists
  //notFoundTemplate: 'appNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  //loadingTemplate: 'appLoading',

  // wait on the following subscriptions before rendering the page to ensure
  // the data it's expecting is present
  //waitOn: function() {
  //  return [
  //    Meteor.subscribe('publicLists'),
  //    Meteor.subscribe('privateLists')
  //  ];
  //}
});

Router.map(function() {
//    this.route('appBody', {path: '/'});
this.route('home', {
  path: '/',
  layoutTemplate: 'defaultLayout',
  yieldTemplates: {
    'topMenu': {to: 'menu'},
    'bottomMenu': {to: 'footer'}
  }
});
this.route('showRace', {
  path: '/showrace',
  layoutTemplate: 'defaultLayout',
  yieldTemplates: {
    'topMenu': {to: 'menu'},
    'bottomMenu': {to: 'footer'}
  }
});
this.route('raceDetail', {
  path: '/racedetail/:_id',
  layoutTemplate: 'defaultLayout',
  yieldTemplates: {
    'topMenu': {to: 'menu'},
    'bottomMenu': {to: 'footer'}
  },
  data:function(){
    return Race.findOne(this.params._id);
  }
});
this.route('addRace', {
  path: '/addrace',
  layoutTemplate: 'defaultLayout',
  yieldTemplates: {
    'topMenu': {to: 'menu'},
    'bottomMenu': {to: 'footer'}
  },
  onBeforeAction: function () {
    AccountsEntry.signInRequired(this);
  }
});
this.route('addCategory', {
  path: '/admin/addCategory',
  layoutTemplate: 'defaultLayout',
  yieldTemplates: {
    'topMenu': {to: 'menu'},
    'bottomMenu': {to: 'footer'}
  },
  onBeforeAction: function () {
    AccountsEntry.signInRequired(this);
  }
});
this.route('showCategory', {
  path: '/admin/showCategory',
  layoutTemplate: 'defaultLayout',
  yieldTemplates: {
    'topMenu': {to: 'menu'},
    'bottomMenu': {to: 'footer'}
  },
  onBeforeAction: function () {
    AccountsEntry.signInRequired(this);
  }
});
this.route('updateCategory', {
  path: '/admin/updateCategory/:_id',
  layoutTemplate: 'defaultLayout',
  yieldTemplates: {
    'topMenu': {to: 'menu'},
    'bottomMenu': {to: 'footer'}
  },
  data: function () {
    return Category.findOne({_id: this.params._id});
  },
  onBeforeAction: function () {
    AccountsEntry.signInRequired(this);
  }
});
this.route('dashboard', {
  path: '/dashboard',
  layoutTemplate: 'defaultLayout',
  yieldTemplates: {
    'topMenu': {to: 'menu'},
    'bottomMenu': {to: 'footer'}
  },
  onBeforeAction: function () {
    AccountsEntry.signInRequired(this);
  },
});
});