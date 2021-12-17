Meteor.methods({
  saveDatai: function(ww){
    let ff = db.users.update({_id: Meteor.userId()}, {
      $set: {
        personalData: {
          lastName: ww.lastName,
          name: ww.name,
          middleName: ww.middleName,
          dateBirth: new Date(ww.date)
        },
        contactData: {
          emaill: ww.emaill,
          emergencyPhone: ww.emergencyPhone
        },
        pasportData: {
          batch: ww.batch,
          Numberr: ww.Numberr,
          whoIssuedIt: ww.whoIssuedIt,
          dateOfIssue: new Date(ww.dateOfIssue),
          unitCode: ww.unitCode,
          locality: ww.locality,
          street: ww.street,
          house: ww.house,
          stroenie: ww.stroenie, 
          corpus: ww.corpus,
          apartment: ww.apartment
        },
        addressData: {
          zipCode: ww.zipCode,
          locality2: ww.locality2,
          street2: ww.street2,
          house2: ww.house2,
          stroenie2: ww.stroenie2, 
          corpus2: ww.corpus2,
          apartment2: ww.apartment2
        }
      }
    })
    return ff
  }
})