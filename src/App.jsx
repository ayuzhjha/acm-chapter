import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./landing/page.jsx";
import Events from "./events/Page";
import EventPage from "./events/EventPage";
import Team from "./team/Page";
import Gallery from "./gallery/Page";
import Newsletter from "./newsletter/Page";
import Membership from "./membership/Page";
import Contact from "./contact/Page";
import ErrorPage from "./errorpage/Page"
import Footer from "./landing/sections/Footer";

const App = () => {
  return (
    <div className="bg-neutral-50">
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<EventPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pagenotfound" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
