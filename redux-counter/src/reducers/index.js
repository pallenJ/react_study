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
        case types.CREATE:
            
            return{
                counters :[
                    ...counters,{
                        color : action.color,
                        number : 0
                    }
                ]
            };
        case types.REMOVE:
            
            return{
                counters : counters.slice(0,counters.length-1)//const로 생성했으므로 
            };
    
        default:
            return state;
    }

}

export default counter;