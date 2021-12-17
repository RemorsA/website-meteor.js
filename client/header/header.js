import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

Template.header.events({
  'click #logout': function(e) {
    e.preventDefault()
    Meteor.logout(function() {
      new Noty({
        type: 'success',
        layout: 'topCenter',
        theme: 'metroui',
        text: 'Вы вышли из аккаунта',
        timeout: '5000',
        progressBar: true,
        closeWith: ['click'],
        killer: true,
      }).show();
      FlowRouter.go('auth')
    })
  }
});