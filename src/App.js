//import logo from './logo.svg';
/*
starting up website
fnm env --use-on-cd | Out-String | Invoke-Expression
fnm use --install-if-missing 20
cd my-react-app
*/
import './App.css';
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

export default App;
