import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import Signup from './components/pages/Signup/Signup';
import Footer from './components/pages/Footer/Footer';
 
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}  />
        <Route path='/Services'  component={Services}  />
        <Route path='/Products'  component={Products}  />
        <Route path='/Signup'  component={Signup}  />
      </Switch>
      <Footer />
     </Router>
   );
}

export default App;

