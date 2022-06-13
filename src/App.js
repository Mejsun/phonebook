import './index.css';
import Login from './components/Login'
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
