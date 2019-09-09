import React, { useContext, useState, useEffect } from 'react';
import { SudokuContext } from '../contexts/sudoku.context';
import { getTimeStringFromSeconds } from '../helpers/timer';
import { isEmpty } from '../helpers/validation';

let sudokuTimerInterval = null;

const Timer = () => {
    const sudokuContext = useContext(SudokuContext);
    const { startTime, isWinGame, isUsedSolution } = sudokuContext;
    const [timer, setTimer] = useState(0);

    useEffect(() => {     
        window.clearInterval(sudokuTimerInterval);
        sudokuTimerInterval = window.setInterval(() => {
            let seconds = Math.round((Date.now() - startTime.getTime())/ 1000);
            setTimer(seconds);
        }, 1000); 

    }, [startTime]);

    useEffect(() => {
        if(isWinGame || isUsedSolution) window.clearInterval(sudokuTimerInterval);
    }, [isWinGame, isUsedSolution]);

    return (
        <div>
            <h3 className="text-center">{ getTimeStringFromSeconds(timer) }</h3>
        </div>
    );
};


export default Timer;
