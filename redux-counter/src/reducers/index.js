//  리듀서:= 액션의 type에 따라 변화를 일으키는 함수
import * as types from '../actions/ActionTypes'

const initialState = {
    counters: [
        {
            color:'black',
            number : 0 
        }
    ]
}

//리듀스 함수 정의
function counter(state = initialState, action) {
    //레퍼런스 생성
    const {counters} = state;

    switch (action.type) {
        
        // 카운터를 새로 추가
        case types.CREATE:
            
            return{
                counters :[
                    ...counters,{
                        color : action.color,
                        number : 0
                    }
                ]
            };
        // slice 를 이용하여 맨 마지막 카운터 제거
        case types.REMOVE:
            
            return{
                counters : counters.slice(0,counters.length-1)//const로 생성했으므로 
            };
        // action.index 번째 카운터의 number가 1 커짐
        case types.INCREMENT:
            return {counters:[
                ...counters.slice(0,action.index),
                {
                    ...counters[action.index],
                    number : counters[action.index].number+1
                },
                ...counters.slice(action.index+1,counter.length)
                ]
            };
        // action.index 번째 카운터의 number가 1 줄음
        case types.DECREMENT:
            return {counters:[
                ...counters.slice(0,action.index),
                {
                    ...counters[action.index],
                    number : counters[action.index].number-1
                },
                ...counters.slice(action.index+1,counter.length)
                ]
            };
        // action.index 번째 카운터의 색상 변경
        case types.SET_COLOR:
            return {counters:[
                ...counters.slice(0,action.index),
                {
                    ...counters[action.index],
                    color : action.color
                },
                ...counters.slice(action.index+1,counter.length)
                ]
            };
        default:
            return state;
    }

}

export default counter;