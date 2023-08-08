
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import SignUP from './Pages/SignUP';
import UserDetails from './Pages/UserDetails';
import Admin from './Pages/Admin';
import User from './Pages/User';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/'element={<Login/>}></Route>
      <Route path='/signup'element={<SignUP/>}></Route>
      <Route path='/login'element={<Login/>}></Route>
      <Route path='/userDetails'element={<UserDetails/>}></Route>
      <Route path='/admin'element={<Admin/>}></Route>
      <Route path='/user'element={<User/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
