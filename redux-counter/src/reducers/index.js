//  리듀서:= 액션의 type에 따라 변화를 일으키는 함수
/*
    리듀서는 state 와 action 을 파라미터로 받으며
    state 가 undefined 일때 (스토어가 생성될때) state 의 기본값을 initialState 로 사용
    action.type 에 따라 다른 작업을 하고, 새 상태를 만들어서 반환
    이 때 주의 할 점은 state 를 직접 수정하면 안되고,
    기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야함
*/

import * as types from '../actions/ActionTypes';

// 초기 상태를 정의
const initialState = {
    color: 'black',
    number: 0
};
//  초기상태로 정의 되는건 color 과 number

function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            
            return{
                ...state,
                number: state.number+1
            };
        case types.DECREMENT:
            
            return{
                ...state,
                number: state.number-1
            };
        case types.SET_COLOR:
            
            return{
                ...state,
                color: action.color
            };
    
        default:
            return state;
    }
}
export default counter;