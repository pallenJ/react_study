import * as types from './ActionTypes';

/*
    action 객체를 만드는 액션 생성자들을 선언
    () => ({}) 는 function() { return { } } 와 동일함.(기억할것.)
*/
export const increment = () => ({
    type : types.INCREMENT
});

export const decrement = () => ({
    type : types.DECREMENT
});

export const setColor  = (color) => ({
    type : types.SET_COLOR
});//유일하게 파라미터를 가짐. 변경할 색상을 받아야하기 때문.

