// Define a function to create a car objectwith optional options...
function create_car(manufacturer, model, ...options){
     // Initialize a car object with  manufacturer and model
     let car = {
         manufacturer: manufacturer,
         model: model
     };

     // Additional options to the car object
     options.forEach(option => {
        let [Key, value] = option.split(":");
        car[Key.trim()] = value.trim();
     });
     
    return car;
}

// Call the function to create a car object
let my_car = create_car("Toyota", "Corrolla", "Color: Black", "Sunroof: True", "Year: 2024");

//Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);