import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import TrafficRules from "./pages/TrafficRules/TrafficRules";
import Testing from "./pages/Testing/Testing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Testing" element={<Testing />} />
        <Route path="/Traffic-rules" element={<TrafficRules />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
