import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

// store 안의 state 값을 props 로 연결
const mapStateToProps = (state) =>({
    counters: state.counters
});
/*
 액션 생성자를 사용하여 액션을 생성,
 해당 액션을 dispatch 하는 함수를 만들고 이를 props 로 연결
*/
const mapDispatchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (index) => {
        const color = getRandomColor();
        dispatch(actions.setColor({ index, color}));
    }
})

const CounterListContainer = () => {
    return (
        <div>
            
        </div>
    )
}

export default CounterListContainer
