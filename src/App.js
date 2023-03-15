import { Auth, Home } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="*" element={<Auth />} />
        <Route path="/im" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
