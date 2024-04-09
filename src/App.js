import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import FactsList from './FactsList';
import FactsEdit from './FactsEdit';
import FactsCreate from './FactsCreate';


function App() {
  return (
    <div className="App">
      {console.log("facts/edit/:userId:id")}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FactsList />}></Route>
          <Route path='/facts/create' element={<FactsCreate/>}></Route>
          <Route path='/facts/edit/:userid/:id' element={<FactsEdit/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
