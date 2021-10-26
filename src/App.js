import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header/Header';
import Main from './pages/Main/Main';


function App() {
  return (
    <Router>
      <Header />
      <Main />

    </Router>
  );
}

export default App;
