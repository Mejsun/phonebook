import './index.css';
import Login from './components/Login'
import Profile from './components/UserProfile'
import Contacts from './components/Contacts'
import { MainWrapper } from './styles/StyledComps';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <MainWrapper>
        <Menu/>
        <Login/>
      </MainWrapper>
    </div>
  );
}

export default App;
