import sudoku from 'sudoku';

function generateGame(){
    let puzzle = sudoku.makepuzzle();
    let solution = sudoku.solvepuzzle(puzzle);
    const difficulty = sudoku.ratepuzzle(puzzle, 4);

    puzzle = puzzle.map((item, index) => ({ isReadonly: (item !== null) ? true : false, value: item, index }))
    solution = solution.map((item, index) => ({ isReadonly: true, value: item, index, filled: true }))
    return { puzzle, solution };
}

function checkWinGame(userPuzzle, solution){
    for(let i = 0; i > solution.length; i++){
        if(userPuzzle[i].value !== solution[i].value) return false;
    }
    return true;
}

function checkCompletion(userPuzzle){
    return !userPuzzle.some(item => item.value === null);
}

export { generateGame, checkWinGame, checkCompletion };