import React, { useContext } from 'react';
import Square from './square';
import { SudokuContext } from '../contexts/sudoku.context';
import { isEmpty } from '../helpers/validation';

const Board = (props) => {
    // const { sudoku, changeSudoku } = props;
    const sudokuContext = useContext(SudokuContext);
    const { sudoku, changeSudoku } = sudokuContext
    // console.log(sudoku);
    return (
           <>
             { !isEmpty(sudoku) && (
                <div className="sudoku">
                {
                    sudoku.puzzle.map((item) => (
                        <Square key={item.index} square={item} onChange={changeSudoku}/>
                    ))
                }
                </div>
            )}
           </>
    );
};

export default Board;
