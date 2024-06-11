var guestList = ["Areeba", "Usman", "Saba", "Sara"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi Ahh Sakti");
guestList.splice(0, 1, "Ammar");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
