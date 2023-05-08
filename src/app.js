import { Route, Switch } from 'react-router-dom';
import 'bootstrap';
//import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Navigation from './components/Nav';



function App() {
  return (
    <div className="App">
      <Navigation/>
        <div>
          <Switch>
            <Route path='/about'  component={About}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/contact' component={Contact}/>

          </Switch>
        </div>

    </div>
  )
  
};

export default App;