import React from "react";
import CardImageArea from "../../sectionTwo/molecules/CardImageArea";
import CircleImgArea from "../../sectionTwo/molecules/CircleImgArea";
import DesHeaderArea from "../../sectionTwo/molecules/DesHeaderArea";
import InnerCardArea from "../../sectionTwo/molecules/InnerCardArea";
import MainSecondHeaderArea from "../../sectionTwo/molecules/MainSecondHeaderArea";
import SecondDesHeaderArea from "../../sectionTwo/molecules/SecondDesHeaderArea";
import SecondHeaderArea from "../../sectionTwo/molecules/SecondHeaderArea";

function SectionFour() {
  return (
    <>
      <div className="section-four">
        <MainSecondHeaderArea />
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

export default SectionFour;
