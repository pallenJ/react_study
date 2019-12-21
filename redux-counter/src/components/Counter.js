import React from 'react'
import './Counter.css';

export const Counter = ({number,color,onIncrement,onDecrement,onSetColor}) => {//현재숫자, 색깔, 증가/감소이벤트, 색깔 지정
    return (
        <div
        className = "Counter"
        onClick = {onIncrement}
        >

        </div>
    )
}
