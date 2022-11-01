// Business Logic

// constructor function
function Bank() {
  this.users = {};
  this.currentId = 0;
}

Bank.prototype.addUser = function(user) {
  user.id = this.assignId();
  this.users[user.id] = user;
}

Bank.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

function addFunds(newDeposit) {
  funds += newDeposit
}

function subFunds(newDeposit) {
  funds -= newDeposit
}

// Business Logic for Bank User Information
function User(firstName, lastName, funds) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.funds = funds;
}
User.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};


// UI Logic

let bankAccount = new registerAccount(name, initialDeposit);