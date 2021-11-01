import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './pages/Main/Main';


function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
