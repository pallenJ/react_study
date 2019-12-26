import * as types from '../actions/ActionTypes';
import { Map, List } from 'immutable';

// 초기 상태를 정의.
const initialState = Map({
    counters: List([
        Map({
            color: 'black',
            number: 0
        })
    ])
})
/*
상태안에 counters라는 배열을 선언하고 거기에 color , number값을 지닌 객체를 만들어 넣어줌
*/


/*

컴포넌트의 state 안에있는 배열을 다룰때와 동일하게, 기존 배열에 직접 push() 혹은 pop() 을 하면 안됨.
... (spread 문법)을 사용하거나, .slice() 함수를 사용하여 배열을 잘라 새로 생성을 해야 함.

이 과정에서, state.counters 를 자주 사용해야하므로, 이를 줄여서 사용하여 코드를 줄이기 위해 상단에 레퍼런스를 만들어서 사용(코드가 더 깔끔해짐.)
*/

// 리듀서 함수를 정의. 
function counter(state = initialState, action) {
    // 레퍼런스 생성
    const counters = state.get('counters');

    switch(action.type) {
        // 카운터 새로 추가
        case types.CREATE:
            return state.set('counters', counters.push(Map({
                color: action.color,
                number: 0
            }))
            );
        // slice 를 이용, 맨 마지막 카운터를 제외
        case types.REMOVE:
            return state.set('counters',counters.pop());

        // action.index 번째 카운터의 number 1 증가
        case types.INCREMENT:
            return state.set('counters', counters.update(
                action.index,
                (counter)=> counter.set('number',counter.get('number')+1))
            );

        // action.index 번째 카운터의 number 1 감소
        case types.DECREMENT:
            return state.set('counters', counters.update(
                action.index,
                (counter)=> counter.set('number',counter.get('number')-1))
            );

        // action.index 번째 카운터의 컬러 변경
        case types.SET_COLOR:
            return state.set('counters', counters.update(
                action.index,
                (counter)=> counter.set('color',action.color))
            );

        default:
            return state;
    }
};



export default counter;