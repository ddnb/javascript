// Function to greet with "Hello, World!"
function helloWorld() {
    console.log("Hello, World!");
}

// Function to greet with "Hi" followed by the name
function hi(name) {
    console.log(`Hi, ${name}!`);
}

// Export an object containing both functions
module.exports = {
    helloWorld: helloWorld,
    hi: hi
};