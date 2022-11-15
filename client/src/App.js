import './App.css';
import { Landing } from './Components/LandingPage/Landing';
import {Route, Switch} from 'react-router-dom'
import { ContainerPrincipal } from './Components/PrincipalContainer/ContainerPrincipal';
import Form from './Components/Form/Form';
import {Detail} from './Components/Detail/Detail';
import { Error } from './Components/Eror/Error';
function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path ='/' component={Landing}/> 
      <Route exact path ='/home' component={ContainerPrincipal}/>
      <Route exact path ='/form' component={Form}/>
      <Route exact path ='/home/:id' component ={Detail}/>
      <Route exact path ='/error' component ={Error}/>
        </Switch>
    </div>
  );
}

export default App;
