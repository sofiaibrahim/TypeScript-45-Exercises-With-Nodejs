// Creating a Guest List Array
var guestList = ["Saba", "Sara", "Sana", "Ayesha"];
// making variable for those guest who cant come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log("Nahi Aha Sakti Hon");
// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Fatima");
// Message print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Adding a new guest  at starting index of array
guestList.unshift("Amna");
// Adding a new guest  at ending index of array
guestList.push("Seema");
// Get a middle index of our guest list array
var midddleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(midddleIndex, 0, "Mahnoor");
// Print Message of Update List
console.log("Update List of our Guests");
// Sending a invitation message to our guest one by onewith thier names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like todinner with me")); });
