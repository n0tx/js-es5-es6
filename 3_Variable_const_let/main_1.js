/**
 * const variable is cannot reassign
 * error = main_1.js:5 Uncaught TypeError: Assignment to constant variable
 */

const manggo = 20;
manggo = 10;
console.log(manggo);

/**
 * let variable is able to reassign
 */
let apple = 40;
apple = 20;
console.log(apple);
