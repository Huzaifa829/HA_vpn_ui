import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import FeaturePage from './Pages/FeaturePage';
import ChangeLog from './Pages/ChangeLog';
import './App.css';

function App() {
  return (
    <>
     <Router>
       <Routes>
         <Route path="/" element={<LandingPage/>}/>
         <Route path="/feature" element={<FeaturePage/>}/>
         <Route path="/changelog" element={<ChangeLog/>}/>
       </Routes>
     </Router>
    </>
  );
}

export default App;
