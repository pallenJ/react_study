import * as types from '../actions/ActionTypes';

// 초기 상태를 정의.
const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
}

// 리듀서 함수를 정의. 
function counter(state = initialState, action) {
    // 레퍼런스 생성
    const { counters } = state;

    switch(action.type) {
        // 카운터 새로 추가
        case types.CREATE:
            return {
                counters: [
                    ...counters,
                    {
                        color: action.color,
                        number: 0
                    }
                ]
            };
        // slice 를 이용, 맨 마지막 카운터를 제외
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length - 1)
            };

        // action.index 번째 카운터의 number 1 증가
        case types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };

        // action.index 번째 카운터의 number 1 감소
        case types.DECREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };

        // action.index 번째 카운터의 컬러 변경
        case types.SET_COLOR:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        default:
            return state;
    }
};

export default counter;