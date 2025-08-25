import { Routes, Route } from "react-router-dom";
import { Home } from "../home/Home";
import { SignIn } from "../signIn/SignIn";
import { SignUp } from "../login/SignUp";
import { DetailPage } from "../detailPage/DetailPage";
export const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signin" element={<SignIn></SignIn>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
      <Route
        path="/home/DetailePage/:id"
        element={<DetailPage></DetailPage>}
      ></Route>
    </Routes>
  );
};
