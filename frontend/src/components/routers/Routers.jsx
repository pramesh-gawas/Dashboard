import { Routes, Route } from "react-router-dom";
import { Home } from "../home/Home";
import { SignIn } from "../signIn/SignIn";
import { LogIn } from "../login/LogIn";
export const Routers = ({data}) => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signin" element={<SignIn></SignIn>}></Route>
      <Route path="/home" element={<Home data={data}></Home>}></Route>
      <Route path="/login" element={<LogIn></LogIn>}></Route>
    </Routes>
  );
};
