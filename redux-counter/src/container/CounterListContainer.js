import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

const mapStateToProps = (state) =>({
    counters: state.counters
});

const CounterListContainer = () => {
    return (
        <div>
            
        </div>
    )
}

export default CounterListContainer
