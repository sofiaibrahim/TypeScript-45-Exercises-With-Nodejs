let guestList = ["Areeba", "Usman", "Saba", "Sara"];

let dontCome = guestList[0];

console.log(dontCome, "Nahi Ahh Sakti");

guestList.splice(0, 1, "Ammar");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));