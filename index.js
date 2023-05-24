const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const svg = require("svg");
const { SVG } = require("@svgdotjs/svg.js");
const {Circle,Triangle,Square}= require("./lib/shapes.js");

const questions = [

    {
        type: "input",
        name: "text",
        message: "What is the text for the logo?",

    },
    {
        type: "input",
        name: "textColor",
        message: "What color do you want the text? Input either color name or the color code",

    },
    {
        type: "list",
        name: "shape",
        message: "What shape would you like?",
        choices: ["Circle", "Triangle", "Square"],
    },



    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like the shape?",

    },
]

//create a function to write the svg file
function writeToFile(fileName, svgCode) {
    fs.writeFile(fileName, svgCode, (err) => {
        if (err) {
            console.error(err);
        }
    })
}

//create a function to initialize app
function generateSVG(userInput) {
    let svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;



    // Generate the shape based on user selection
    if (userInput.shape === "Square"){
        const squareInstance= new Square();
        squareInstance.setColor(userInput.shapeColor); 
        svgCode += squareInstance.render();
    } else if (userInput.shape === "Circle") {
        const circleInstance= new Circle();
        circleInstance.setColor(userInput.shapeColor); 
        svgCode += circleInstance.render();
        
    } else if (userInput.shape === "Triangle") {
        const triangleInstance= new Triangle();
        triangleInstance.setColor(userInput.shapeColor); 
         svgCode += triangleInstance.render();
        
    } else {
        console.log("Invalid shape input");
    }

    // Generate the logo text

    svgCode += `<text x="150" y="100" fill="${userInput.textColor}" text-anchor="middle" font-size="35">${userInput.text}</text>`;
    svgCode += `</svg>`;

    return svgCode;
}

// Function to initialize the app
function beginQuestions() {
    return inquirer.prompt(questions).then((userInput) => {
        const svgCode = generateSVG(userInput);
        writeToFile("logo.svg", svgCode);
    });
}

// Call the app
beginQuestions();





