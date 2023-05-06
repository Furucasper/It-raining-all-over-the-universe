import React, { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  changeSound?: () => void;
  changeSecondSound?: () => void;
  changeSFX?: () => void;
  playBtnClickSFX: () => void;
}

const Howyoufeel: FC<Props> = ({ changeSound, changeSecondSound, changeSFX, playBtnClickSFX }) => {
  
  const navigate = useNavigate()

  const nextPage = () => {
    changeSound && changeSound()
    changeSecondSound && changeSecondSound()
    changeSFX && changeSFX()
    playBtnClickSFX()
    navigate("/hmm")
  }

  return (
    <div className="flex justify-center font-season">
      <div
        className="w-full  text-center h-screen flex bg-cover bg-center"
        style={{ backgroundImage: "url('/pages/daytime-window.gif')" }}
      >
        <div className="m-auto fade-in pt-[15rem] [&>p]:text-lg/loose [&>span]:text-lg/loose">
          <p>ช่วงนี้เป็นยังไงบ้างเหรอ?</p>
          <div className="mt-4">
            <div className="btn-primary" onClick={nextPage}>ไม่ค่อยมีความสุข</div>
            <div className="btn-primary mt-3" onClick={nextPage}>เฉย ๆ</div>
            <div className="btn-primary mt-3" onClick={nextPage}>มีความสุขดี</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howyoufeel;
