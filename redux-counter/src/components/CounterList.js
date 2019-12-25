import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

import './CounterList.css';

/*
여러개의 카운터를 랜더링 하기위한 컴포넌트
카운터 객체와 카운터를 조작하는 함수를 props로 받음

counters를 Counter 컴포넌트 배열로 로 변환하는 과정에선 key 를 배열의 index 로 설정하고 index 값도 컴포넌트에 props로 전달

color 값과 number 값을 각각 설정하는 대신 {...counter} 으로 객체를 풀어서 한꺼번에 전달해줄수도 있음


*/

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {

    const counterList = counters.map(
        (counter, i) => (
            <Counter 
                key={i}
                index={i}
                {...counter}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSetColor={onSetColor}
            />
        )
    );

    return (
        <div className="CounterList">
            {counterList}
        </div>
    );
};

CounterList.propTypes = {
    counters: PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string,
        number: PropTypes.number
    })),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
}

export default CounterList;