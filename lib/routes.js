import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('account')
  }
})

FlowRouter.route('/profile', {
  name: 'profile',
  action() {
    BlazeLayout.render('profile')
  }
})

FlowRouter.route('/auth', {
  name: 'auth',
  action() {
    BlazeLayout.render('auth')
  }
})

FlowRouter.route('/recoveryPass', {
  name: 'recoveryPass',
  action() {
    BlazeLayout.render('recoveryPass')
  }
})

FlowRouter.route('/registration', {
  name: 'registration',
  action() {
    BlazeLayout.render('registration')
  }
})

FlowRouter.route('/meteorapp', {
  name: 'meteorapp',
  action() {
    BlazeLayout.render('meteorapp')
  }
})