// Clean Code: Naming and Standardization Challenge

// BAD
function addmessage(message) {
  const messageData = { ...message, type: "EMAIL" };

  // adds message to the DB
}

// GOOD
function createEmail(message) {
  const email = { ...message, type: "EMAIL" };

  // adds message to the DB
}

// BAD
function emptyAdmin(id) {
  return { type: "Admin" };
}

// GOOD
function getNewAdmin(id) {
  return { type: "Admin" };
}

// BAD
function removeUserById(id) {
  // delete user
}

// GOOD
function deleteUserById(id) {
  // delete user
}

// BAD
function deleteAdminById(id) {
  // delete admin
}

// GOOD
function deleteAdminById(id) {
  // delete admin
}
s;
