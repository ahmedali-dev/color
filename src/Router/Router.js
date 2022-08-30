import { Routes, Route } from "react-router-dom";
import Palettes from "../component/Palettes";
import Palette from "../component/Palette";
import Home from "../component/Home";
import Linear from "../component/Linear";
import About from "../component/About";

const Router = () => {
  return (
    <>
      <Routes>
        {/* product page */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* palettes */}
        <Route path="/palettes" element={<Palettes />} />
        <Route path="/palettes/:id" element={<Palette />} />

        {/* linear */}
        <Route path="/linear" element={<Linear />} />

        {/* about */}
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Router;
