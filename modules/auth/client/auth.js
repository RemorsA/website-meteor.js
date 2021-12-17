import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

Template.auth.onRendered(function(){
  if (Session.get('sessionPhone') == undefined) {
    document.getElementById('logPhone').value = null
  } else {
    document.getElementById('logPhone').value = Session.get('sessionPhone')
  }
})

Template.auth.helpers({
  authh: function() {
    Session.set('ass', '123')
    console.log(Session.get('ass'))
  }
        // Session.set('phoneFromRegistration', registerData.username)
        // console.log(Session.get('phoneFromRegistration'))
})

Template.auth.events({
  'click #signIn': function(e) {
    e.preventDefault()
    let phone = $("#logPhone").val()
    let pass = $("#logPass").val()
    if (phone.length === 10) {
      phone = "+7" + phone
    } else if (phone[0] === '8') {
      phone = phone.replace(/^8/, "+7")
    }
    Meteor.loginWithPassword(phone, pass, function() {
      if (Meteor.user()) {
        new Noty({
          type: 'success',
          layout: 'topCenter',
          theme: 'metroui',
          text: 'Успешно',
          timeout: '3500',
          progressBar: true,
          closeWith: ['click'],
          killer: true,
        }).show();
        // setTimeout(function() { open("profile", "_self")}, 3500)
        FlowRouter.go('/')

      } else {
        new Noty({
          type: 'error',
          layout: 'topCenter',
          theme: 'metroui',
          text: 'Ошибка, введите правильный пароль из SMS',
          timeout: '3500',
          progressBar: true,
          closeWith: ['click'],
          killer: true,
        }).show();
      }
    })
  }
});