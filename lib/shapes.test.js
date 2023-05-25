const { Circle, Square, Triangle } = require("./shapes.js");


describe("Triangle", function () {
    test("should return polygon svg string", function () {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150,0 0,200 300,200" fill="blue" />');
    })
});

describe("Circle", function () {
    test("should return circle svg string", function () {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />');
    })
});

describe("Square", function () {
    test("should return square svg string", function () {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<rect x="0" y="0" width="250" height="250" fill="blue" />`);
    })
});
