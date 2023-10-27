// BAD
function getNonPrimaryUsers(user) {
  if (getIsUserPrimaryActiveAccount(user)) {
    return user.subMembers;
  } else {
    return new Error("User is not Primary Account Holder.");
  }
}

// GOOD
function getIsUserPrimaryActiveAccount(user) {
  const isPrimaryAccount = user.isPrimaryAccount === true;
  const isActive = user.isActive === true;

  return isActive && isPrimaryAccount;
}

// Clean Code: Encapsulating Conditionals Challenge
// BAD
function getLoadingState(state) {
  if (!!state.user && state.loading === false && state.hasError === false) {
    return "Finished Loading";
  }

  if (
    state.user === null &&
    state.loading === true &&
    state.hasError === false
  ) {
    return "Loading...";
  }

  return "Error occured";
}

// GOOD
function getLoadingState(state) {
  if (hasUserLoadedSuccesfully(state)) {
    return "Finished Loading";
  }

  if (isUserLoadingSuccesfully(state)) {
    return "Loading...";
  }

  return "Error occured";
}

function hasUserLoadedSuccesfully(state) {
  return !!state.user && state.loading === false && state.hasError === false;
}

function isUserLoadingSuccesfully(state) {
  return (
    state.user === null && state.loading === true && state.hasError === false
  );
}
