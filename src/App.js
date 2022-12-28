import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Axios client with the jwtToken
import { client } from "./utils/client.mjs";
//Import pages
import Nav from "./Nav";
import HeroPage from "./HeroPage";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import Footer from "./Footer";
import PostOffer from "./PostOffer";
import SelectRequest from "./SelectRequest";
import WorkerProfile from "./WorkerProfile";
import ClientProfile from "./ClientProfile";
import DocumentForm from "./DocumentForm";
import CallForm from "./CallForm";
import TransaltionForm from "./TransaltionForm";
import Category from "./Category";
import About from "./About";
//Module for various cookie settings
import { CookiesProvider, useCookies } from "react-cookie";
import toast, { Toaster } from "react-hot-toast";

function App() {
  //authetication of user for the whole app
  const [jwttoken, setJwttoken] = useState(localStorage.getItem("token"));
  //Cookie
  const [cookies, setCookie] = useCookies();
  const notify = () => toast("Here is your toast.");

  return (
    <>
      <Toaster />
      <CookiesProvider>
        <Nav></Nav>
        <BrowserRouter>
          <Routes>
            <Route index element={<HeroPage />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Category/:id" element={<Category />} />
            <Route path="/About" element={<About />} />
            <Route
              path="/SignIn"
              element={<SignIn setJwttoken={setJwttoken} />}
            />
            <Route path="/WorkerPorfile" element={<WorkerProfile />} />
            <Route path="/ClientProfile" element={<ClientProfile />} />
            <Route path="/PostOffer" element={<PostOffer />} />
            <Route path="/SelectRequest" element={<SelectRequest />} />
            <Route path="/DocumentForm" element={<DocumentForm />} />
            <Route path="/CallForm" element={<CallForm />} />
            <Route path="/TransaltionForm" element={<TransaltionForm />} />
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </CookiesProvider>
    </>
  );
}

export default App;
