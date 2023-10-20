// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Golf 2023"
 console.log(cohort.split(" "))

// a) Your answer: [ golf, 2023]
// b) Verify and explain: .split split the string into an array my answer was correct

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 console.log(greeter("LEARN Student"))

// a) Your answer: error
// b) Verify and explain: it came back is undefined  beacsue there is no return statement 

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
 console.log(onlyOdds)

// a) Your answer: 11 13 15
// b) Verify and explain: used . filter to filter throught the array and then the function with number % 2 !== 0 is used for every number that is not divisible by 2

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:javascript
// b) Verify and explain: the console log acceses the first object thich is languages and the [0] takes the first index in that array which is javascript

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Golf"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: george
// b) Verify and explain: when i consoled logged it came back as { student: 'George', cohort: 'Golf', year: 2023 } 
// im guessing because when console logged it returns everything in the class 
