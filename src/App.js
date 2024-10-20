//import logo from './logo.svg';
/*
starting up website
fnm env --use-on-cd | Out-String | Invoke-Expression
fnm use --install-if-missing 20
cd my-react-app
*/
import './App.css';
import MyComponent from './MyComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const SecondPage = () => {
  return <h1>This is the second page of my website</h1>;
};

function App() {
  return (
    <Router>
      <div>
        <MyComponent />
        <Routes>
          <Route path="/second-page" component = {SecondPage} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
