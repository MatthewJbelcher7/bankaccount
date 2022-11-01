// Business Logic

// constructor function


function Bank() {
  this.users = {};
  this.currentId = 0;
}

Bank.prototype.addUser = function(user) {
  user.id = this.assignId();
  this.users[user.id] = user;
};

Bank.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Bank.prototype.addFunds = function(deposit) {
  let funds = parseInt(bank.users["1"].funds);
  funds = funds + deposit;
  return funds
}

function subFunds(newDeposit) {
  funds -= newDeposit;
}

// Business Logic for Bank User Information
function User(firstName, lastName, funds) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.funds = funds;
}
User.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// UI Logic
let bank = new Bank();

function handleFormSubmission(event) {;
  event.preventDefault();
  const inputtedFirstName = document.querySelector("input#new-first-name").value;
  const inputtedLastName = document.querySelector("input#new-last-name").value;
  const inputtedIntialDeposit = document.querySelector("input#intial-deposit").value;
  let newUser = new User(inputtedFirstName, inputtedLastName, inputtedIntialDeposit);
  bank.addUser(newUser);
}

window.addEventListener("load", function (){
  document.querySelector("form#user").addEventListener("submit", handleFormSubmission);
});