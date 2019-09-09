import React, { useState } from 'react';
import { generateGame, checkWinGame, checkCompletion } from '../helpers/sudoku';
import { isNumberInRange, isEmpty } from '../helpers/validation';
import Swal from 'sweetalert2';

export const SudokuContext = React.createContext();

export const SudokuProvider = (props) => {
    const [sudoku, setSudoku] = useState({});
    const [isWinGame, setIsWinGame] = useState(false);
    const [startTime, setStartTime] = useState(new Date());
    const [isUsedSolution, setIsUsedSolution] = useState(false);
    
    const changeSudoku = (index, value) => {
        let val = sudoku.puzzle[index].value;
        if(isEmpty(value)) val = null;
        if(isNumberInRange(value, 1, 9)) val = Number(value);
        sudoku.puzzle[index].value = val;
        setSudoku({ ...sudoku });
        
        const winGame = checkWinGame(sudoku.puzzle, sudoku.solution);
        const complete = checkCompletion(sudoku.puzzle);
        console.log(winGame, complete);
        setIsWinGame(winGame);
        if(winGame){
            window.clearInterval(window.sudokuTimerInterval);
        } 
    }

    const newGame = () => {
        const newSudoku = generateGame();
        setIsWinGame(false);
        setIsUsedSolution(false);
        setSudoku(newSudoku);
        setStartTime(new Date());
    }

    const solveGame = () => {
        if(!isWinGame && !isUsedSolution){
            sudoku.puzzle = sudoku.solution.map(item => item);
            setSudoku({ ...sudoku });
            setIsUsedSolution(true);
            Swal.fire({
                title: 'Seems this round is a bit hard for you!!',
                toast: true,
                position: 'top-right',
                timer: 3500,
                showCloseButton: false
            })
        }
    }

    const states = { sudoku, isWinGame, startTime, isUsedSolution };
    const methods = { changeSudoku, solveGame, newGame };

    return (
        <SudokuContext.Provider value={{
            ...states,
            ...methods
        }}>
            { props.children }
        </SudokuContext.Provider>
    )
}
