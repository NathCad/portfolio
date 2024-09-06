import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import DevSkills from "./components/DevSkills";
import SoftSkills from "./components/SoftSkills"

import "./app.scss";
import AboutMe from "./components/AboutMe";


export const App = () => (
  <>
    <Header />
    <Intro />
    <DevSkills />
    <SoftSkills />
    <AboutMe />
  </>
);
