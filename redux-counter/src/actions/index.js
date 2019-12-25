import * as types from './ActionTypes';

/*
    action 객체를 만드는 액션 생성자들을 선언
    () => ({}) 는 function() { return { } } 와 동일함.(기억할것.)
*/


export const create = () => ({
    type : types.CREATE
});

export const remove = () => ({
    type : types.REMOVE
});
//기존의 함수에 index추가. 어느 component의 이벤트인지 알기위함.
export const increment = (index) => ({
    type : types.INCREMENT,
    index
});

export const decrement = (index) => ({
    type : types.DECREMENT,
    index
});

export const setColor  = (index,color) => ({
    type : types.SET_COLOR,
    index,
    color : color
});
 