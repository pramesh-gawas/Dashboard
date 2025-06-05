import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routers } from "./components/routers/Routers";

function App() {
  return (
    <>
      <Header></Header>
      <Routers></Routers>
      <Footer></Footer>
    </>
  );
}

export default App;
