import './index.css';
import Login from './components/Login'
import Profile from './components/UserProfile'
import Contacts from './components/Contacts'

function App() {
  return (
    <div className="App">
      <Login/>
      <Profile/>
      <Contacts/>
    </div>
  );
}

export default App;
