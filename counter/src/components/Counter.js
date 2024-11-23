import classes from './Counter.module.css';
import { increment,increase,decrement, incrementby2, decrementby2 } from '../store/counterSlice';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {

  const counter=useSelector((state)=>state.counter.count)
  const dispatch=useDispatch()
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className={classes.btn} >
        <button  onClick={()=>dispatch(increment())}>Increament by 5</button>
        <button onClick={()=>dispatch(decrement())}>Decreament by 5</button>
        <button onClick={()=>dispatch(incrementby2())}>Increament by 2</button>
        <button onClick={()=>dispatch(decrementby2())}>Decreament by 2</button>
        <button onClick={()=>dispatch(increase(10))}>Increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
