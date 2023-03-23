import { Auth, Home } from "./pages";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Link to="/register">Hello, world!</Link>} />
        <Route path="/im" element={<Home />} />
        <Route path="*" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
