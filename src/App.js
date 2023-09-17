import React from 'react';
import FirstPage from './Components/FirstPage';
import Welcome from './Components/Welcome';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/welcome" component={Welcome} />
      </Router>
    </div>
  );
}

export default App;
