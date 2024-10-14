const challenges = require('../challenges'); // Adjust the path if necessary

describe('Hello World challenge test case', () => {
    test('helloWorld should output "Hello, World!"', () => {
        console.log = jest.fn(); // Mock console.log
        challenges.helloWorld();
        expect(console.log).toHaveBeenCalledWith("Hello, World!");
    });
});