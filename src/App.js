import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from "./components/Blog/Blog/Blog";
import Home from './components/Home/Home/Home';
import Project from './components/Project/Project/Project';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/blog'>
          <Blog></Blog>
        </Route>
        <Route path = '/project'>
          <Project></Project>
        </Route>
        <Route path = "/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
