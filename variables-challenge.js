// Clean Code: Variables Challenge 1

/**
 * userNames: string[first, middle, last]
 * return First Middle Initial Last Name
 */

/*
Readability Options?
---

- How might we use array destructuring?
- Can we use descriptive variable names?
- How might we user string interpolation?
*/

// BEFORE
function getUsersFullName(userNames) {
  return userNames[0] + " " + userNames[1][0] + ". " + userNames[2];
}

console.log(getUsersFullName(["John", "Doe", "Erickson"]));

// AFTER
function getUsersFullName(userNames) {
  const [firstName, middleName, lastName] = userNames;
  const middleInitial = middleName[0];

  return `${firstName} ${middleInitial}. ${lastName}`;
}

console.log(getUsersFullName(["Dylan", "Christopher", "Israel"]));

// Clean Code: Variables Challenge 1.5

class Cat {
  catName;
  catAge;
}

class Cat {
  name;
  age;
}

const tito = new Cat();
tito.age = 12;
tito.name = "Milo";
