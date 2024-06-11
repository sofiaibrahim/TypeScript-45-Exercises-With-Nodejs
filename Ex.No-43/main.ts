//Define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify array 
function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`)
}

// Define an array of magicians names
let magicians_names = ["Harry Potter", "Ammar", "Mavia"];

// Makinga copyof Orignal array through .Slice() function
let copy_magician_names = magicians_names.slice();

// Modify the copied array  to include "The Great" with thier names
let copy_great_magicians =  make_great(copy_magician_names);

//Show both arrays Original and Copied

// Original
console.log("Orginal Array\n")
show_magicians(magicians_names);

// Copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);




