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
          <div className="mt-4 flex flex-col gap-3">
            <button type="button" className="btn-primary" onClick={nextPage}>ไม่ค่อยมีความสุข</button>
            <button type="button" className="btn-primary" onClick={nextPage}>เฉย ๆ</button>
            <button type="button" className="btn-primary" onClick={nextPage}>มีความสุขดี</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howyoufeel;
