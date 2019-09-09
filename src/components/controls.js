import React, { useContext } from 'react';
import { SudokuContext } from '../contexts/sudoku.context';

const SudokuControls = () => {
    const sudokuContext = useContext(SudokuContext);
    const { newGame, solveGame } = sudokuContext;
    
    return (
        <div className="text-center my-3">
            <button className="btn btn-success" onClick={newGame}>New Game</button>{' '}  
            <button className="btn btn-warning" onClick={solveGame}>Solve Game</button>     
        </div>
    );
};


export default SudokuControls;
