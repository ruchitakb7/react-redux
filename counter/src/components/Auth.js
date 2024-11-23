import classes from './Auth.module.css';
import { login} from '../store/AuthSlice';
import { useDispatch } from 'react-redux';

const Auth = () => {

  //const isAuthenticated=useSelector((state)=>state.auth.isAuthenticated)
  const dispatch=useDispatch()

  const submitHandler=(event)=>{
        event.preventDefault()
        dispatch(login())
  }

  return (
    <div className={classes.box}>
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' required/>
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
    </div>
  );
};

export default Auth;
