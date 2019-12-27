import { createAction, handleActions } from "redux-actions";
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

//액션타입에 접두사가 들어가 있으므로 그냥 CREATE:를 쓰면 안되고, [CREATE]:로 해야함.
//또한 스위치를 사용하지 않으므로 각 함수마다 카운터 필요
export default handleActions({
    [CREATE]:   (state,action)=>{
        const counters = state.get('counters');
        return state.set('counters', counters.push(
            Map({
                color : action.payload,
                number: 0
            })
        ));
    },    
    [REMOVE]:   (state,action)=>{
        const counters = state.get('counters');
        return state.set('counters',counters.pop());
    },
    [INCREMENT]:(state,action)=>{
        const counters = state.get('counters'); 
        return state.set('counters',counters.update(
            action.payload,
            (counter)=>counter.set('number',counter.get('number')+1)
        ));
    },
    [DECREMENT]:(state,action)=>{
        const counters = state.get('counters');
        return state.set('counters',counters.update(
            action.payload,
            (counter)=>counter.set('number',counter.get('number')-1)
        ));
    },
    [SET_COLOR]:(state,action)=>{
        const counters = state.get('counters');
        return state.set('counters', counters.update(
            action.payload.index,
            (counter) => 
                counter.set('color',action.payload.color)
        ));
    },
    },initialState
)