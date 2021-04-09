import React from "react";
import CardImageArea from "../molecules/CardImageArea";
import CircleImgArea from "../molecules/CircleImgArea";
import DesHeaderArea from "../molecules/DesHeaderArea";
import InnerCardArea from "../molecules/InnerCardArea";
import MainHeaderArea from "../molecules/MainSecondHeaderArea";
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
        <InnerCardArea />
      </div>
    </>
  );
}

export default SectionTwo;
