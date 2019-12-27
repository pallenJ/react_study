import { createAction, handleAction } from "redux-actions";
import { Map, List } from "immutable";

//액션타입
const CREATE    = 'counter/CREATE';
const REMOVE    = 'counter/REMOVE';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';

//액션 생성자
export const create    = createAction(CREATE);// color
export const remove    = createAction(REMOVE);
export const increment = createAction(INCREMENT);//index
export const decrement = createAction(DECREMENT);//index
export const setColor  = createAction(SET_COLOR);//{index,color}


// 초기 상태를 정의.
const initialState = Map({
    counters: List([
        Map({
            color: 'black',
            number: 0
        })
    ])
})