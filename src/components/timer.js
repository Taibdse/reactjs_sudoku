import React, { useContext } from 'react';
import { SudokuContext } from '../contexts/sudoku.context';
import { getTimeStringFromSeconds } from '../helpers/timer';

const Timer = () => {
    const sudokuContext = useContext(SudokuContext);
    const { timer } = sudokuContext;

    return (
        <div>
            <h3 className="text-center">{ getTimeStringFromSeconds(timer) }</h3>
        </div>
    );
};


export default Timer;
