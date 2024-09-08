import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import DevSkills from "./components/DevSkills";
import SoftSkills from "./components/SoftSkills";
import AboutMe from "./components/AboutMe";
import Projets from "./components/Projets";
import Contact from "./components/Contact";

import "./app.scss";

export const App = () => (
  <>
    <Header />
    <Intro />
    <DevSkills />
    <SoftSkills />
    <AboutMe />
    <Projets />
    <Contact />
  </>
);
