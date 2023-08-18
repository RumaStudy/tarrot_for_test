import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Shop from "./components/Shop";
import Main from "./components/Main";
import Tarrot from "./components/Tarrot";

import List from "./components/itemList";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [data] = useState(List);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/tarrot_for_test/" element={<Main data={data} />} />
        <Route path="/tarrot_for_test/Login" element={<Login />} />
        <Route path="/tarrot_for_test/Shop" element={<Shop data={data} />} />
        <Route
          path="/tarrot_for_test/Tarrot"
          element={<Tarrot data={data} />}
        />
        <Route
          path="/tarrot_for_test/*"
          element={
            <section className="inner">
              <h1>404 Error!</h1>
            </section>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
