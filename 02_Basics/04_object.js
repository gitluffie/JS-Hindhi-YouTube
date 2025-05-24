//const tinderUser = new Object()
const tinderUser = {}

tinderUser. id = "123abc"
tinderUser. name = "Sammy"
tinderUser. isLoggedIn = "False"



//console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary" // fixed typo from latname to lastname
    }
  }
};

// console.log(regularUser.fullname.userfullname.firstname); // optional
// console.log(regularUser.fullname.userfullname.lastname);  // optional

// // Or if you want to log the full name:
// console.log(
//   `${regularUser.fullname.userfullname.firstname} ${regularUser.fullname.userfullname.lastname}`
// );

// console.log(regularUser.fullname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = Object.assign({},obj1, obj2, obj4)
const obj3 {...obj1, ...obj2}
console.log(obj3);
