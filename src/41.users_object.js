"use strict";

function countOnline(obj) {
  // Only change code below this line
  let result = 0;
  for (let user in obj) {
    if (obj[user].online === true) {
      result++;
    }
  }
  return result;
  // Only change code above this line
}

let users = [
  {
    Alan: {
      online: false,
    },
    Jeff: {
      online: true,
    },
    Sarah: {
      online: false,
    },
  },
];

console.log(countOnline(users));

//

//

//

// SECOND CHALLENGE //

/**
Take a look at the object we've provided in the code editor. 
The user object contains three keys. 
The data key contains five keys, one of which contains an array of friends. 
From this, you can see how flexible objects are as data structures. 
We've started writing a function addFriend. 
Finish writing it so that it takes a user object and adds the name of the friend argument 
to the array stored in user.data.friends and returns that array.
 */
let usersTwo = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};
console.log(usersTwo.data.friends[2]);

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj;
  // Only change code above this line
}

console.log(addFriend(usersTwo, "Pete"));
