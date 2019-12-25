import React, {Component} from 'react';
import Buttons from '../components/Buttons';
import CounterListContainer from './CounterListContainer';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { getRandomColor } from '../utils';

class App extends Component {
    render() {
        const { onCreate, onRemove } = this.props;
        return (5
            <div className="App">
                <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainer/>
            </div>
        );
    }
}

// 액션함수 준비
const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: (index) => dispatch(actions.remove(index))
});

// 리덕스에 연결을 시키고 내보낸다
// store에서 필요한 값이 없으니 mapStateToProps 는 null 로 설정
// mapToDispatch 는 버튼을 위한것
export default connect(null, mapToDispatch)(App);