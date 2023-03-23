import { Auth, Home } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
