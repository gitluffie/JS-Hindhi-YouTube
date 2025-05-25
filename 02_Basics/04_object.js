// Creating a new object using object literal syntax
const tinderUser = {};

// Adding properties to the object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false; // use boolean instead of string

// Nested object
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary"
    }
  }
};

// Optional logs:
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);

// Full name log:
// console.log(`${regularUser.fullname.userfullname.firstname} ${regularUser.fullname.userfullname.lastname}`);
// console.log(regularUser.fullname);

// Object merging
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// Using spread syntax for merging
const obj3 = {...obj1, ...obj2, ...obj4}; // fixed syntax

// Outputting tinderUser object and its keys and values
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));
