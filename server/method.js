// Meteor.methods({
//   registrationNewUser(phone) {
//     const id = Accounts.createUser({
//       username: phone.username,
//       password: phone.password
//     })
//     return id
//   }

// });

// function getRandomInt(min,max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min
// }

// function getRandomString(length) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
//   let result = ""
  
//   for (let i = 0; i < length; i++) {
//     const index = getRandomInt(0, alphabet.length - 1)
//     result += alphabet[index]
//   }
  
//   return result
// }

// Meteor.methods({
//   findUser(username) {
//     result = {}
//     user = db.users.findOne({username: username})
//     try {
//       let newPass = getRandomString(6)
//       Accounts.setPassword(user._id, newPass)
//       result.newUserPass = newPass.toString()
//     } catch (_error) {
//       err = _error
//       console.log(err)
//       throw new Meteor.Error(err.message)
//     }
//     return result
//   }
//   });

// Meteor.methods({
//   sendSMSFromServer: function(number, text) {
//     (((ref3 = Meteor.settings.smsOptions) != null ? ref3.smsc : void 0) != null) 
//     console.log('send sms type2');
//     login = 'Win Level';
//     pass = 'Start123!';
//     sender = 'winlevel.ru';
//     HTTP.post('https://smsc.ru/sys/send.php?login=' + login + '&psw=' + pass + '&phones=' + number + '&mes=' + encodeURI(text) + '&sender=' + sender + '&charset=utf-8', {});
//   }
// })