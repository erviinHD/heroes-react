import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../shared";
import { DC, HeroDetail, Marvel, Search } from "../";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="dc" element={<DC />}></Route>
          <Route path="marvel" element={<Marvel />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="hero" element={<HeroDetail />}></Route>

          <Route path="/" element={<Navigate to="/marvel" />}></Route>
        </Routes>
      </div>
    </>
  );
};
