import React from 'react'
import PropTypes from 'prop-types';
import './Counter.css';

export const Counter = ({number,color,onIncrement,onDecrement,onSetColor}) => {//현재숫자, 색깔, 증가/감소이벤트, 색깔 지정
    return (
        <div
        className = "Counter"
        onClick = {onIncrement}
        onContextMenu = {
            (e) => {
                e.preventDefault();
                onDecrement();
            }
        }
        onDoubleClick = {onSetColor}
        style = {{backgroundColor:color}}
        >
            {number}
        </div>
    )
}

Counter.propTypes = {
    number : PropTypes.number,
    color  : PropTypes.string,
    onIncrement : PropTypes.func,
    onDecrement : PropTypes.func,
    onSetColor  : PropTypes.func
}

Counter.defaultProps = {
    number : 0,
    color  : 'black',
    onIncrement : () =>console.warn('onIncreament not defined'),
    onDecrement : () =>console.warn('onDecreament not defined'),
    onSetColor  : () =>console.warn('onSetColor not defined')
}