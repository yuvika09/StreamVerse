import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './pages/Login';
import Signup from './pages/Signup';
import StreamVerse from './pages/StreamVerse';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/StreamVerse" element={<StreamVerse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;