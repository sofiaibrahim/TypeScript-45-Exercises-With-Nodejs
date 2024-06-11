// Making a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "ILove TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the  ").concat(printMessage, " prints on shirt"));
}
// Calling a function with by-defulat values
make_shirt();
// Calling a function now with Medium size and default message
make_shirt("Medium");
// Calling a function now with Small size and also Different Print Message
make_shirt("Small", "I Love JavaScript");
