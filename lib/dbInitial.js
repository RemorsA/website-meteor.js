if (typeof db === "undefined" || db === null) {
  this.db = {};
}

db.users = Meteor.users

