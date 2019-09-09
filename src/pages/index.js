import React, { useState, useEffect, useContext } from 'react';
import Layout from '../components/layout';
import Board from '../components/board';
import SudokuControls from '../components/controls';
import { SudokuContext } from '../contexts/sudoku.context';
import Timer from '../components/timer';
import Swal from 'sweetalert2';

const IndexPage = (props) => {
    const sudokuContext = useContext(SudokuContext);
    const { isWinGame, newGame } = sudokuContext;
    
    
    

    useEffect(() => {
        if(isWinGame){
            Swal.fire({
                type: 'success',
                title: 'You have won this round, congratulation!!',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3500
            })
        }
    }, [isWinGame]);

    useEffect(() => {
        newGame();

        return () => {
            window.clearInterval(window.sudokuTimerInterval);
        }
    }, []);

    return (
        <Layout>
            <SudokuControls/>
            <Timer/>
            <Board />
        </Layout>
    );
};

export default IndexPage;
