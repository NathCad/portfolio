import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import DevSkills from "./components/DevSkills";
import SoftSkills from "./components/SoftSkills"

import "./app.scss";


export const App = () => (
  <>
    <Header></Header>
    <Intro></Intro>
    <DevSkills></DevSkills>
    <SoftSkills></SoftSkills>
  </>
);
