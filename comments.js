/*
BAD comments
- Comments used when they are unneededd
- Comments are typically used to explain bad code
- Comments need to be maintained and may mislead
- Leftover code
- Version control code
- Visual Markers
- TODOs
*/

/*
GOOD comments
- Short and concise
- Provide value
- Clarifies code that has a business purpose but looks out of sort
- Sometimes a warning or amplification of importance
- Legal Comments
*/

// BAD
// gets all longest strings
function longestString(inputArray) {
  // initialize the longest string to first value
  let length = inputArray[0].length;

  for (let i = 1; i < inputArray.length; i++) {
    // checks if current string is longer than current longest
    if (length < inputArray[i].length) {
      length = inputArray[i].length;
    }
  }

  // filters out any values not equal to the longest string
  const strs = inputArray.filter((word) => word.length === length);

  return strs;
}

// GOOD
function getLongestStrings(inputArray) {
  let longestWordLength = inputArray[0].length;

  for (let i = 1; i < inputArray.length; i++) {
    if (longestWordLength < inputArray[i].length) {
      longestWordLength = inputArray[i].length;
    }
  }

  const longestWords = inputArray.filter(
    (word) => word.length === longestWordLength
  );

  return longestWords;
}

// remove commented code
function getUserName(firstName, middleName, lastName) {
  // const initials = `${firstName[0]}{MidName[0]}${lastName[0]};
  return `${firstName} ${middleName} ${lastName}`;
}

// GOOD
function getUserName(firstName, middleName, lastName) {
  return `${firstName} ${middleName} ${lastName}`;
}

// BAD
/****************************
 * DEPENDENCIES
 ***************************/

/////////////////////////
// USER CLASS
/////////////////////////
class User {
  /////////////////////////
  // PROPERTIES
  /////////////////////////
  firstName;
  middleName;
  lastName;
}

/****************************
 * ADMIN CLASS
 ***************************/
// Move in new file admin.class.js
class AdminUser extends User {
  constructor() {}
}

// GOOD
class User {
  firstName;
  middleName;
  lastName;
}

/*
 *   Clean Code: Avoid Visual Markers Challenge
 *   1. Clean Up the visual markers.
 */
// BAD
/****************************
 * DEPENDENCIES
 ***************************/

/////////////////////////
// PET CLASS
/////////////////////////
class Pet {
  /////////////////////////
  // PROPERTIES
  /////////////////////////
  name;
  age;
  totalLegs;
}

/****************************
 * DOG CLASS
 ***************************/
// Move in new file dog.class.js
class Dog extends Pet {
  constructor() {}
}

// TODO: Clean Up this files
// GOOD

class Pet {
  name;
  age;
  totalLegs;
}
