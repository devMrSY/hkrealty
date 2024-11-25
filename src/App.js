 import './App.css';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './component/privacy-policy/privacy-policy';
import Home from './component/home';

function App() {
  return (
      <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </Router>
      
      
       {/* <PrivacyPolicy />  */}
      </>
  );
}
export default App;
