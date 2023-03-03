// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
// import useEffect from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Success from './pages/Success';
import { useSelector } from 'react-redux';

function App() {
  // useEffect(() => {
  //   window.location.reload();
  // }, [window.location.pathname]);
  const user = useSelector((state)=>state.user.currentUser);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route path='/products/:category'>
            <ProductList/>
          </Route>
          <Route path='/product/:id'>
            <Product/>
          </Route>
          <Route path='/cart'>
            <Cart/>
          </Route>
          <Route path='/success'>
            <Success/>
          </Route>
          <Route path='/login'>
            {user ? <Redirect to="/"/> : <Login/>}
          </Route>
          <Route path='/register'>
          {user ? <Redirect to="/"/> : <Register/>}
          </Route>
        </Switch>
      </Router>
      {/* <Home/> */}
      {/* <ProductList/> */}
      {/* <Product/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Cart/> */}
    </div>
  );
}



export default App;
