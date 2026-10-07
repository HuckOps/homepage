import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Github from "./pages/Github";
import HuggingFace from "./pages/HuggingFace";
import Layouts from "./layouts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="github" element={<Github />} />
        <Route path="huggingface" element={<HuggingFace />} />
      </Route>
    </Routes>
  );
}

export default App;
