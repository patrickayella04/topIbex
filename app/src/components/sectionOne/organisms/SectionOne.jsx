import React from "react";
import ButtonOneArea from "../molecules/ButtonOneArea";
import ImgArea from "../molecules/ImgArea";
import MainHeaderArea from "../molecules/MainHeaderArea";
import ParaDescriptionArea from "../molecules/ParaDescriptionArea";

function SectionOne() {
  return (
    <>
      <div className="section-one">
        <ImgArea />
        <MainHeaderArea />
        <ParaDescriptionArea />
        <ButtonOneArea />
      </div>
    </>
  );
}

export default SectionOne;
