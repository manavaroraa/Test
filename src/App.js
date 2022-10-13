import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Experience from './components/Experience';
import List from './List';

const App = () => {
    return (
      //<React.StrictMode>
      <Router>
          <Routes>
            <Route exact path="/" element={<List/>}/>
            <Route exact path="/detail" element={<Experience/>}>
              <Route path=":id" element={< Experience/>}> </Route>
            </Route>
          </Routes>
      </Router>
      //</React.StrictMode>
    );
  }
  
  export default App;

