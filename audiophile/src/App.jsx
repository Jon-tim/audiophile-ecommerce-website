import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";
import { Home } from "./pages/Home";
import Speakers from "./pages/Speakers";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
      </Routes>
    </div>
  );
}

export default App;
