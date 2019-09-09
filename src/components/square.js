import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Square = (props) => {
    const { value, isAvailable, index } = props.square;
    const { onChange } = props;

    return (
        <div className={classnames('game-col', { 
                'left-border': index % 3 === 0 && index % 9 != 0, 
                'bottom-border': Math.floor(index / 9) % 3 === 2 && Math.floor(index/9) !== 8,
                'available': isAvailable
                })}>
            <input 
                disabled={isAvailable} 
                type="text" 
                onChange={(e) => onChange(index, e.target.value)}
                value={value == null ? '' : value}/>
        </div>
    );
};

Square.propTypes = {};

export default Square;
