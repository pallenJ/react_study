
import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {//value: 입력내용, onCreate : 버튼클릭시 이벤트 , onChange : 내용이 변경시 실행함수 onKeyPress : input안에서 키보드로 입력시 이벤트
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};
export default Form;