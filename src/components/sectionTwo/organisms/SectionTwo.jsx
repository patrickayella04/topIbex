import React from "react";
import CardImageArea from "../molecules/CardImageArea";
import CircleImgArea from "../molecules/CircleImgArea";
import DesHeaderArea from "../molecules/DesHeaderArea";
import MainHeaderArea from "../molecules/MainHeaderArea";
import SecondDesHeaderArea from "../molecules/SecondDesHeaderArea";
import SecondHeaderArea from "../molecules/SecondHeaderArea";

function SectionTwo() {
  return (
    <>
      <div className="section-two">
        <MainHeaderArea />
        <DesHeaderArea />
        <SecondHeaderArea />
        <SecondDesHeaderArea />
        <CircleImgArea />
        <CardImageArea />
      </div>
    </>
  );
}

export default SectionTwo;
