Template.profile.onCreated(function() {
  this.autorun((function() {
    let phonePr = document.getElementById('profPhone')
    let currentUs = db.users.findOne({"_id": Meteor.userId()})
    setTimeout(function() {
      if (1 == true) {
        Session.set('currentPhone', currentUs.username)
      }
    }, 500)
    setTimeout(function() {
      phonePr.value = Session.get('currentPhone')
    }, 500)
  }))
})

Template.profile.events({
  'click #saveData': function() {
    let obj = {
      lastName: $('#lastName').val(),
      name: $('#name').val(),
      middleName: $('#middleName').val(),
      dateBirth: $('#dateBirth').val(), 
      emaill: $('#emaill').val(),
      emergencyPhone: $('#emergencyPhone').val(),
      batch: $('#batch').val(),
      Numberr: $('#Numberr').val(),
      whoIssuedIt: $('#whoIssuedIt').val(),
      dateOfIssue: $('#dateOfIssue').val(),
      unitCode: $('#unitCode').val(),
      locality: $('#locality').val(),
      street: $('#street').val(),
      house: $('#house').val(),
      stroenie: $('#stroenie').val(), 
      corpus: $('#corpus').val(),
      apartment: $('#apartment').val(),
      zipCode: $('#zipCode').val(),
      locality2: $('#locality2').val(),
      street2: $('#street2').val(),
      house2: $('#house2').val(),
      stroenie2: $('#stroenie2').val(), 
      corpus2: $('#corpus2').val(),
      apartment2: $('#apartment2').val()
    }
    if (obj.batch.match(/\d{4}/gm)) {
    } else if (obj.Numberr.match(/\d{6}/gm)) {
    } else {
      new Noty({
        type: 'warning',
        layout: 'topCenter',
        theme: 'metroui',
        text: 'Введите правильную серию и номер паспорта',
        timeout: '5000',
        progressBar: true,
        closeWith: ['click'],
        killer: true
      }).show();
      return
    }
    if (obj.unitCode.match(/\d{6}/gm)) {
    } else {
      new Noty({
        type: 'warning',
        layout: 'topCenter',
        theme: 'metroui',
        text: 'Введите правильный код-подразделения',
        timeout: '5000',
        progressBar: true,
        closeWith: ['click'],
        killer: true
      }).show();
      return
    }
    if (obj.house.match(/\d{2}/gm)) {
    } else if (obj.stroenie.match(/\d{2}/gm)) {
    } else if (obj.corpus.match(/\d{2}/gm)) {
    } else if (obj.apartment.match(/\d{2}/gm)) {
    } else {
      new Noty({
        type: 'warning',
        layout: 'topCenter',
        theme: 'metroui',
        text: 'Введите в паспортных данных правильное место выдачи паспорта',
        timeout: '5000',
        progressBar: true,
        closeWith: ['click'],
        killer: true
      }).show();
      return
    }
    if (obj.emergencyPhone.match(/^(\+7|8)?\d{10}$/)) {
      if (obj.emergencyPhone.length === 10) {
        obj.emergencyPhone = "+7" + obj.emergencyPhone
      } else if (obj.emergencyPhone[0] === '8') {
        obj.emergencyPhone = obj.emergencyPhone.replace(/^8/, "+7")
      }
    } else {
      new Noty({
        type: 'warning',
        layout: 'topCenter',
        theme: 'metroui',
        text: 'Введите правильный номер запасного телефона',
        timeout: '5000',
        progressBar: true,
        closeWith: ['click'],
        killer: true
      }).show();
      return
    }
    if (obj.emaill.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gm)) {
    } else {
      new Noty({
        type: 'warning',
        layout: 'topCenter',
        theme: 'metroui',
        text: 'Введите правильный email',
        timeout: '5000',
        progressBar: true,
        closeWith: ['click'],
        killer: true
      }).show();
      return
    }
    if (obj.zipCode.match(/\d{6}/gm)) {
    } else {
      new Noty({
        type: 'warning',
        layout: 'topCenter',
        theme: 'metroui',
        text: 'Введите правильный почтовый индекс',
        timeout: '5000',
        progressBar: true,
        closeWith: ['click'],
        killer: true
      }).show();
      return
    }
    if (obj.house2.match(/\d{2}/gm)) {
    } else if (obj.stroenie2.match(/\d{2}/gm)) {
    } else if (obj.corpus2.match(/\d{2}/gm)) {
    } else if (obj.apartment2.match(/\d{2}/gm)) {
    } else {
      new Noty({
        type: 'warning',
        layout: 'topCenter',
        theme: 'metroui',
        text: 'Введите правильно в адресных данных - место проживания ',
        timeout: '5000',
        progressBar: true,
        closeWith: ['click'],
        killer: true
      }).show();
      return
    }
    Meteor.call('saveDatai', obj, function(err, res) {
      console.log(res)
      if (res) {
        new Noty({
          type: 'success',
          layout: 'topCenter',
          theme: 'metroui',
          text: 'Ваш данные сохранены',
          timeout: '5000',
          progressBar: true,
          closeWith: ['click'],
          killer: true
        }).show();
      } else {
        new Noty({
          type: 'error',
          layout: 'topCenter',
          theme: 'metroui',
          text: 'Ошибка',
          timeout: '5000',
          progressBar: true,
          closeWith: ['click'],
          killer: true
        }).show();
      }
      if (err) {
        new Noty({
          type: 'error',
          layout: 'topCenter',
          theme: 'metroui',
          text: 'Ошибка',
          timeout: '5000',
          progressBar: true,
          closeWith: ['click'],
          killer: true
        }).show();
      }
    })
  }
})

