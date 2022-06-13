import './index.css';
import Login from './components/Login'
import Profile from './components/UserProfile'
import Contacts from './components/Contacts'
import { MainWrapper } from './styles/StyledComps';

function App() {
  return (
    <div className="App">
      <MainWrapper>
        <Login/>
      </MainWrapper>
    </div>
  );
}

export default App;
