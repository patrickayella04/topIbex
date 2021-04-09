import React from "react";
import ThirdDesHeader from "../atoms/ThirdDesHeader";
import MainThirdHeaderArea from "../molecules/MainThirdHeaderArea";
import ThirdCardImageArea from "../molecules/ThirdCardImageArea";
import ThirdCircleImgArea from "../molecules/ThirdCircleImgArea";
import ThirdInnerCardArea from "../molecules/ThirdInnerCardArea";
import ThirdSecondDesHeaderArea from "../molecules/ThirdSecondDesHeaderArea";
import ThirdSecondHeaderArea from "../molecules/ThirdSecondHeaderArea";

function SectionThree() {
  return (
    <>
      <div className="section-three">
        <MainThirdHeaderArea />
        <ThirdDesHeader />
        <ThirdSecondHeaderArea />
        <ThirdSecondDesHeaderArea />
        <ThirdCircleImgArea />
        <ThirdCardImageArea />
        <ThirdInnerCardArea />
      </div>
    </>
  );
}

export default SectionThree;
