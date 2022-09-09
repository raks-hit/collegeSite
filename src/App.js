import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DSA from './components/DSA';
import PL from './components/PL';

function App() {
  return (
  
    
<Router>
<Routes>
   <Route exact path="/" element={<Home />}/>
   <Route exact path='/DSA' element={<DSA/>}/>
   <Route exact path='/PL' element={<PL/>}/>
</Routes>
</Router>
  );
}

export default App;
