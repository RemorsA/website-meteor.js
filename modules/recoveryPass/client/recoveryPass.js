import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

Template.recoveryPass.events({
  "click #recPass": function(e) {
    e.preventDefault();
    let userPhone = $('#inputRecPass').val();
    if (userPhone.length === 10) {
      userPhone = "+7" + userPhone
    } else if (userPhone[0] === '8') {
      userPhone = userPhone.replace(/^8/, "+7")
    }
    
    Meteor.call('findUser', userPhone ,function(err, res) {
      let pa = Object.values(res)
      if (res) {
        Meteor.call('sendSMSFromServer', userPhone, pa, function() {
          new Noty({
            type: 'success',
            layout: 'topCenter',
            theme: 'metroui',
            text: 'Успешно: Пароль отправлен на ваш телефон',
            timeout: '5000',
            progressBar: true,
            closeWith: ['click'],
            killer: true,
          }).show();
          FlowRouter.go('auth')
        })
      }
    })
  }
});

