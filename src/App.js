import Aboutme from "./pages/aboutme/aboutme.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Aboutme />} />
      </Routes>
    </Router>
  );
}

export default App;
