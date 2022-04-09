import './App.css';
import Header from './common/header/Header';
import Pages from './pages/Pages';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Header />
        <Routes>
              <Route path="" element={<Pages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
