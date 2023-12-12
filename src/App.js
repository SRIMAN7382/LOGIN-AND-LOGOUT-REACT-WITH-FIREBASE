import './App.css';
import NavBar from './components/NavBar.js';
import SignIn from './components/SignIn';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './firebase.js';

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
    {user ? <NavBar /> : <SignIn />}
    </>
  );
}

export default App;
