import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import { Session } from 'meteor/session'

function getRandomInt(min,max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

// function getRandomString(length) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
//   let result = ""
  
//   for (let i = 0; i < length; i++) {
//     const index = getRandomInt(0, alphabet.length - 1)
//     result += alphabet[index]
//   }
  
//   return result
// }

Template.registration.events({
  'click #signUp': function(e) {
    e.preventDefault()
    let registerData = {
      username: $("#regPhone").val(),
      password: "" + getRandomInt(100000, 999999)
    }
    Session.set('sessionPhone', registerData.username)
    if (registerData.username.match(/^(\+7|8)?\d{10}$/)) {
      if (registerData.username.length === 10) {
        registerData.username = "+7" + registerData.username
      } else if (registerData.username[0] === '8') {
        registerData.username = registerData.username.replace(/^8/, "+7")
      }
    } else {
      new Noty({
        type: 'warning',
        layout: 'topCenter',
        theme: 'metroui',
        text: 'Введите правильный номер телефона',
        timeout: '5000',
        progressBar: true,
        closeWith: ['click'],
        killer: true
      }).show();
      return
    }
    Meteor.call('registrationNewUser',registerData, function(err, res){
      if (res) {
        Session.set('phoneFromRegistration', registerData.username)
        Meteor.call('sendSMSFromServer',registerData.username, registerData.password, function(){
          new Noty({
            type: 'success',
            layout: 'topCenter',
            theme: 'metroui',
            text: 'Успешно, ваш пароль выслан вам на телефон',
            timeout: '5000',
            progressBar: true,
            closeWith: ['click'],
            killer: true,
          }).show();
          FlowRouter.go('auth');
        })
      } else if (err) {
        new Noty({
          type: 'error',
          layout: 'topCenter',
          theme: 'metroui',
          text: 'Ошибка, такой номер телефона уже зарегестрирован',
          timeout: '5000',
          progressBar: true,
          closeWith: ['click'],
          killer: true,
        }).show();
      }
    })
  }
});

Template.registration.events({
  'click #form': function () {
    $('#form').on('change', function(){
      if($(this).is(':checked')) {$('.btn').attr('disabled', false) 
      } else $('.btn').attr('disabled', true) 
      
    })
  }
})