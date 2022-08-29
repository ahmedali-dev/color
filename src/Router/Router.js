import { Routes, Route } from "react-router-dom";
import Palettes from "../component/Palettes";
import Palette from "../component/Palette";
import Home from "../component/Home";
import Linear from "../component/Linear";

const Router = () => {
  return (
    <>
      <Routes>
        {/* product page */}
        <Route path="/" element={<Home />} />

        {/* palettes */}
        <Route path="/palettes" element={<Palettes />} />
        <Route path="/palettes/:id" element={<Palette />} />

        {/* linear */}
        <Route path="/linear" element={<Linear />} />
      </Routes>
    </>
  );
};

export default Router;
