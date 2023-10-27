/*
Objectives
- Readable
- Searchable
- Understandable
*/

// Small functions
// Elimination boolean flags
// Reads top to bottom
// Correct function naming
// Limiting parameters
// DRY - Don't Repeat Yourself
// Avoid side effects
// NO GLOBALS

//  Limit Params - BAD
function getUsersFullName(first, middle, last, nickName) {
  return `${first} ${middle} ${last} - AKA: ${nickName}`;
}

//  Limit Params - GOOD
function getUsersFullName(userName) {
  return `${userName.first} ${userName.middle} ${userName.last} - AKA: ${userName.nickName}`;
}

// Descriptive Names - BAD
function addUser(user) {
  const userData = { ...user, type: "Admin" };

  // adds user to DB
}

// Descriptive Names - GOOD
function addAdminUser(user) {
  const userData = { ...user, type: "Admin" };

  // adds user to DB
}

// Standardization of Naming - BAD
function retrieveAdminById(id) {
  //  gets admin
}

function getUserById(id) {
  // gets user
}

// Standardization of Naming - GOOD
function getAdminById(id) {
  //  gets admin
}

function getUserById(id) {
  // gets user
}
