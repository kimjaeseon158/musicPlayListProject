import './App.css';
import LoginPage from './loginPage/loginPage-Front/loginPage';
import backgroundImg from './img/backgroundImg-neon.png';

function App() {
  return (
    <div className="App">
      <img src={backgroundImg} className="background" />
      <div className="login-container">
        <LoginPage />
      </div>
    </div>
  );
}

export default App;