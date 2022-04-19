import Counter from '../components/Counter';
import { connect, useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import { bindActionCreators, useCallback } from 'react';
function CounterContainer(props) {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return <Counter number={number} onIncrease={ onIncrease } onDecrease={ onDecrease }></Counter>
    // return <Counter number={props.number} onIncrease={ props.increase } onDecrease={ props.decrease }></Counter>
}

export default CounterContainer;

// export default connect(
//     state => ({ number: state.counter.number }),
//     {
//         increase,
//         decrease
//     }
// )(CounterContainer);