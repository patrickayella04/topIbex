import React from "react";
import FBottomBoxArea from "../molecules copy/4_BottomBoxArea";
import FCardImageArea from "../molecules copy/4_CardImageArea";
import FCircleImgArea from "../molecules copy/4_CircleImgArea";
import FDesHeaderArea from "../molecules copy/4_DesHeaderArea";
import FInnerCardArea from "../molecules copy/4_InnerCardArea";
import FMainSecondHeaderArea from "../molecules copy/4_MainSecondHeaderArea";
import FSecondDesHeaderArea from "../molecules copy/4_SecondDesHeaderArea";
import FSecondHeaderArea from "../molecules copy/4_SecondHeaderArea";

function SectionFour() {
  return (
    <>
      <div className="section-four">
        <FMainSecondHeaderArea />
        <FDesHeaderArea />
        <FSecondHeaderArea />
        <FSecondDesHeaderArea />
        <FCircleImgArea />
        <FCardImageArea />
        <FInnerCardArea />
        <FBottomBoxArea />
      </div>
    </>
  );
}

export default SectionFour;
