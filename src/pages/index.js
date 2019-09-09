import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Board from '../components/board';
import SudokuControls from '../components/controls';
import { SudokuContext } from '../contexts/sudoku.context';
import Timer from '../components/timer';
import Swal from 'sweetalert2';

const IndexPage = () => {
    const sudokuContext = useContext(SudokuContext);
    const { isWinGame } = sudokuContext;

    useEffect(() => {
        if(isWinGame){
            alert('YOU WIN GAME, CONGRATULATION!!');
        }
    }, [isWinGame]);

    return (
        <Layout>
            <SudokuControls/>
            <Timer/>
            <Board />
        </Layout>
    );
};

IndexPage.propTypes = {};

export default IndexPage;
