import React from "react";

import TBottomBoxArea from "../molecules/3_BottomBoxArea";
import TMainHeaderArea from "../molecules/3_MainHeaderArea";

import TCircleImgArea from "../molecules/3_CircleImgArea";
import TCardImageArea from "../molecules/3_CardImageArea";
import TSecondHeaderArea from "../molecules/3_SecondHeaderArea";
import TSecondDesHeaderArea from "../molecules/3_SecondDesHeaderArea";
import TDesHeaderArea from "../molecules/3_DesHeaderArea";
import TInnerCardArea from "../molecules/3_InnerCardArea";

function SectionThree() {
  return (
    <>
      <div className="section-three">
        <TMainHeaderArea />
        <TDesHeaderArea />
        <TSecondHeaderArea />
        <TSecondDesHeaderArea />
        <TCircleImgArea />
        <TCardImageArea />
        <TInnerCardArea />
        <TBottomBoxArea />
      </div>
    </>
  );
}

export default SectionThree;
