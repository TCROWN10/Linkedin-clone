import './App.css';
import SignIn from './components/signIn';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return(
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/LandingPage" element={<LandingPage />} />
      
      </Routes>
      </Router>
    </div>
  )
}
export default App;

