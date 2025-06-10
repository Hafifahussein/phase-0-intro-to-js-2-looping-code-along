/**
 * Creates an array of thank you messages for each name in the input array.
 *
 * @param {string[]} names - An array of names to create thank you messages for.
 * @param {string} event - The name of the event to thank the person for.
 * @returns {string[]} An array of thank you messages.
 */
const writeCards = (names, event) => {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
  }
  return messages;
};

/**
 * Counts down from a given number to zero, logging each number to the console.
 *
 * @param {number} start - The number to start counting down from.
 */
const countDown = (start) => {
  while (start >= 0) {
    console.log(start);
    start--;
  }
};

