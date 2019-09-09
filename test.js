var sudoku = require('sudoku');
 
var puzzle     = sudoku.makepuzzle();
var solution   = sudoku.solvepuzzle(puzzle);
var difficulty = sudoku.ratepuzzle(puzzle, 10);

console.log(typeof puzzle);
console.log(puzzle.length);
console.log(JSON.stringify(puzzle));
console.log(JSON.stringify(solution));
console.log(difficulty);