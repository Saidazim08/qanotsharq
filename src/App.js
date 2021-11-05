import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './pages/Main/Main';
import Covid from './pages/Covid/Covid'


function App() {
  return (
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/Covid">
            <Covid />
          </Route>
        </Switch>

        <Footer />
      </Router>
  );
}

export default App;
