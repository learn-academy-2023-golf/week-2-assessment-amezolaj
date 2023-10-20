// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

//const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
//const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
// describe(`divisibleByThree`, () => {
//     it("decides if the number inside it is evenly divisible by three or not.", () => {
// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"
//       expect(divisibleByThree(object1.number)).toEqual("is divisible by three");
//       expect(divisibleByThree(object2.number)).toEqual("is divisible by three");
//       expect(divisibleByThree(object3.number)).toEqual("is not divisible by three");
//     });
// });

// // b) Create the function that makes the test pass.
// const divisibleByThree = (string) => {
//         if (string % 3 === 0) {
//             return "is divisible by three"
//         } else if (string % 3 === -1) {
//             return "is not divisible by three"
//         }
     
// }

// Pseudo code:
//input ; a string
//output; a string saying if the number is  divisble by 3 or not
//create a function called divisbleByThree
//used a conditional statement to determine if it is divisible by 3 or not 


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("wordsCapitalized", () => {
    it("returns an array with all the words capitalized.", () => {
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
      expect(wordsCapitalized(randomNouns1)).toEqual("Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew");
      expect(wordsCapitalized(randomNouns2)).toEqual("Temperature", "Database", "Chopsticks", "Mango");
    });
  });


// b) Create the function that makes the test pass.

const wordsCapitalized = (array) => {
    return array.split("").toUppercase[0].join("")
}
    


// Pseudo code
// input; array
// output; array with every first letter of each word capitalized
// create a function wordscapitalized
// splie the array into a string uppercase the firsletter and rejoin it back into an array
//thats my thought process but cant figure out the right way
