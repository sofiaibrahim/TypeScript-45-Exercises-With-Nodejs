// Making a Function
function make_shirt (size: string="Large",printMessage: string = "ILove TypeScript"){
    console.log(`Creating a ${size} shirt with the  ${printMessage} prints on shirt`)
}

// Calling a function with by-defulat values
make_shirt();

// Calling a function now with Medium size and default message
make_shirt("Medium")

// Calling a function now with Small size and also Different Print Message
make_shirt("Small", "I Love JavaScript")