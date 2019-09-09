import React, { useState, useEffect } from 'react';
import { generateGame, checkWinGame, checkCompletion } from '../helpers/sudoku';
import { isNumberInRange, isEmpty } from '../helpers/validation';

export const SudokuContext = React.createContext();

let sudokuTimerInterval

export const SudokuProvider = (props) => {
    const [sudoku, setSudoku] = useState({});
    const [isWinGame, setIsWinGame] = useState(false);
    const [startTime, setStartTime] = useState(new Date());
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        newGame();
    }, []);

    const changeSudoku = (index, value) => {
        let val = sudoku.puzzle[index].value;
        if(isEmpty(value)) val = null;
        if(isNumberInRange(value, 1, 9)) val = Number(value);
        sudoku.puzzle[index].value = val;
        setSudoku({ ...sudoku });
        setIsWinGame(checkWinGame(sudoku.puzzle, sudoku.solution));
        const winGame = checkWinGame(sudoku.puzzle, sudoku.solution);
        const complete = checkCompletion(sudoku.puzzle);
        if(!winGame && complete){
            alert('YOU GOT SOME ERRORS!!, PLEASE CHECK AGAIN');
        }
        setIsWinGame(winGame);
    }

    const newGame = () => {
        clearInterval(sudokuTimerInterval);
        const newSudoku = generateGame();
        setSudoku(newSudoku);
        setIsWinGame(false);
        setStartTime(new Date());
        setTimer(0);
        sudokuTimerInterval = window.setInterval(() => {
            const seconds = Math.round((Date.now() - startTime.getTime())/1000);
            setTimer(seconds);
        }, 1000);
    }

    const solveGame = () => {
        if(!isWinGame){
            clearInterval(sudokuTimerInterval);
            sudoku.puzzle = sudoku.solution.map(item => item);
            setSudoku({ ...sudoku });
            alert('SEEMS THIS GAME VERY HARD FOR YOU!');
        }
    }

    const states = { sudoku, isWinGame, timer };
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
