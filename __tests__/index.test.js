const javascript = require('../index'); // Adjust the path if necessary

describe('Javascript Challenges', () => {
    test('helloWorld should output "Hello, World!"', () => {
        console.log = jest.fn(); // Mock console.log
        javascript.helloWorld();
        expect(console.log).toHaveBeenCalledWith("Hello, World!");
    });

    test('hi should greet the user with their name', () => {
        const name = "Alice";
        console.log = jest.fn(); // Mock console.log
        javascript.hi(name);
        expect(console.log).toHaveBeenCalledWith(`Hi, ${name}!`);
    });
});
