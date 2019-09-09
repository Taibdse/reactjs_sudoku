import React, { useContext } from 'react';
import { SudokuContext } from '../contexts/sudoku.context';
import Swal from 'sweetalert2';

const SudokuControls = () => {
    const sudokuContext = useContext(SudokuContext);
    const { newGame, solveGame, isWinGame } = sudokuContext;

    const handleNewGame = async () => {
        if(!isWinGame){
            const res = await Swal.fire({
                title: 'Are you sure?',
                text: 'You have not finished this round!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, new game',
                cancelButtonText: 'No, skip it',
            })
        
            if(res.value) newGame();
        } else {
            newGame();
        }
    }
    
    return (
        <div className="text-center my-3">
            <button className="btn btn-success" onClick={handleNewGame}>New Game</button>{' '}  
            <button className="btn btn-warning" onClick={solveGame}>Solve Game</button>     
        </div>
    );
};


export default SudokuControls;
