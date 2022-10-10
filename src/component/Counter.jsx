import React, {useReducer} from "react";

function reducer(state, action) {
    // action.type에 따라 다른 작업 수행
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            // 아무것도 해당되지 않을 때 기존 상태 반환
            return state
    }
}

const Counter = () => {

    // state : 현재 가리키고 있는 상태, dispatch : 액션을 발생시키는 함수
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    return (
        <div>
            <p>
                현재 카운팅 <b>{state.value}</b> 입니다.
            </p>
            <button onClick={() => dispatch({ type:'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type:'DECREMENT' })}>-1</button>
        </div>
    );
};

export default Counter;