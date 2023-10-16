// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.
function findFirstVowelIndex(str) {
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        console.log(`The first vowel "${str[i]}" is at index ${i}.`);
        return i; // Return the index of the first vowel and exit the function
      }
    }
    console.log("No vowels found in the given string.");
    return -1; // Return -1 if no vowels are found
  }
  
  // Example usage:
  findFirstVowelIndex("Hello, World!"); // Output: The first vowel "e" is at index 1.
  findFirstVowelIndex("Fly high!"); // Output: The first vowel "y" is at index 2.
  findFirstVowelIndex("Rhythm"); // Output: No vowels found in the given string.
  
  
  
// Critique the code output. 
// the code is pretty understand. there a couple things im confused about but the ai is really good at exxplaing what it did as far as if i would change anything or what i particularly dislike i honestly feel like i dont have enough knowledge or practice with code yet to really say what i do like what i dont like and what id change just yet

// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 