import { Navigate, Route, Routes } from "react-router-dom";
import { Marvel } from "../heroes/pages/Marvel";
import { Login } from "../auth/pages/Login";
import { DC } from "../heroes/pages/DC";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="dc" element={<DC />}></Route>
        <Route path="marvel" element={<Marvel />}></Route>
        <Route path="login" element={<Login />}></Route>

        <Route path="/*" element={<Navigate to="/marvel" />}></Route>
      </Routes>
    </>
  );
};
