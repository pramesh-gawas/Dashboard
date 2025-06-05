import { Routes, Route } from "react-router-dom";
import { Home } from "../home/Home";
import { SignIn } from "../signIn/SignIn";
import { LogIn } from "../login/LogIn";
export const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/signin" element={<SignIn></SignIn>}></Route>
      <Route path="/login" element={<LogIn></LogIn>}></Route>
    </Routes>
  );
};
