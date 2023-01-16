import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ImageSection from "./components/ImageSection";
import { Routes, Route } from "react-router-dom";
// import news from "./components/data";

const App = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [bgColor, setBgColor] = useState(user ? "white" : "#ffc017");
  const objStyle = {
    backgroundColor: bgColor,
  };
  const handleScroll = (event) => {
    if (user) {
      setBgColor("white");
    } else {
      if (event.currentTarget.scrollTop >= 600) {
        setBgColor("white");
      } else {
        setBgColor("#ffc017");
      }
    }
  };
  const openModal = () => {
    setShowModal(!showModal);
  };

  const onLogin = (username, password) => {
    if (username == "Bold" && password == "qweqwe") {
      setShowModal(false);
      setUser(username);
    } else {
      alert("Tanii ner eswel password buruu bnaa, zasna uu");
    }
  };

  return (
    <div
      style={{ width: "100vw", overflow: "scroll", height: "100vh" }}
      onScroll={handleScroll}
    >
      <Header
        style={objStyle}
        onLogin={onLogin}
        user={user}
        setUser={setUser}
        showModal={showModal}
        openModal={openModal}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {!user && <ImageSection />}
              <Main />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

function About() {
  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      About
    </div>
  );
}
export default App;
