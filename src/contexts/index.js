  
import React from 'react';
import { SudokuProvider } from './sudoku.context';

function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight((kids, parent) => (
        React.cloneElement(parent, {
            children: kids
        })
    ), children)
}

const GlobalContext = (props) => {
    const contexts = [ 
        <SudokuProvider/>,
    ];
    
    return (
        <ProviderComposer contexts={contexts}>
            { props.children }
        </ProviderComposer>
    )
} 

export default GlobalContext;
