import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Identification/Login/Login'
import Signup from "./Components/Identification/Singin/Signup";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/singup" element={<Signup/>} />
          </Routes>
      </Router>
  );
}

export default App;
