import classes from './Header.module.css';
import { logout,login } from '../store/AuthSlice';
import { useDispatch ,useSelector} from 'react-redux';
import Auth from './Auth';
import { Link } from 'react-router-dom';

const Header = () => {
  
  const isAuthenticated=useSelector((state)=>state.auth.isAuthenticated)
  console.log(isAuthenticated)

  const dispatch=useDispatch()
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuthenticated ?(
            <ul>
            <li>
            <Link to="/products">My Products</Link>
            </li>
            <li>
              <Link tp='/sales'>Sales</Link>
            </li>
            <li>
              <button onClick={()=>dispatch(logout())}>Logout</button>
            </li>
          </ul>
          ):(
            <Auth></Auth>
          )
        }
       
      </nav>
    </header>
  );
};

export default Header;
