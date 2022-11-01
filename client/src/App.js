import './App.css';
import { Landing } from './Components/LandingPage/Landing';
import { Razas } from './Components/Razas/Razas';

function App() {
  return (
    <div className="App">
    <Route exact path='/Razas' render={()=> <Landing /> }> </Route> 
    </div>
  );
}

export default App;
