import { Navigate, Route, Routes } from "react-router-dom";

import { DC, Marvel } from "../heroes";
import { Login } from "../auth";
import { Navbar } from "../shared";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="dc" element={<DC />}></Route>
        <Route path="marvel" element={<Marvel />}></Route>
        <Route path="login" element={<Login />}></Route>

        <Route path="/*" element={<Navigate to="/marvel" />}></Route>
      </Routes>
    </>
  );
};
