const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (input) => {
  return tutorials.map((line) => {
    const tokens = line.split(" ");
    const newArray = [];

    const capitalizedTokens = tokens.map((token) => {
      newArray.push(token.charAt(0).toUpperCase() + token.slice(1));
    });
    const response = newArray.join(" ");
    return response;
  });
}

// Step 1: Separate each sentence by " " into a new array
// Step 2: Target each array item and capitalize just the first letter in each array.
// Step 3: Add a " " back to the end of each array, except for the last items
// Step 4: Concatenate each nested array back together to become a full sentence again.