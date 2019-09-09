import React from 'react';
import PropTypes from 'prop-types';

const Square = (props) => {
    const { value, isReadonly, index } = props.square;
    const { onChange } = props;

    return (
        <div className="game-col">
            <input 
                disabled={isReadonly} 
                type="text" 
                onChange={(e) => onChange(index, e.target.value)}
                value={value == null ? '' : value}/>
        </div>
    );
};

Square.propTypes = {};

export default Square;
