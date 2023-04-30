import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string
  playBtnClickSFX: () => void;
}

const WelcomeName: FC<Props> = ({ name, playBtnClickSFX }) => {
  const navigate = useNavigate();
  const nextPage = () => {
    playBtnClickSFX()
    navigate("/afterwn");
  };

  return (
    <div className="bg-white">
      <div className="flex justify-center font-season">
        <div
          className="w-full  text-center h-screen flex bg-cover bg-center"
          style={{ backgroundImage: "url('/pages/daytime-window.gif')" }}
        >
          <div className="m-auto fade-in pt-[14rem] [&>p]:text-lg/loose [&>span]:text-lg/loose">
            <p className="truncate max-w-[15rem]">สวัสดีคุณ <b>{name}</b></p>
            <p>ช่วงนี้คุณสบายดีไหม ?</p><br />
            <div>
              <div className="btn-primary" onClick={nextPage}>ใช่</div>
              <div className="btn-primary mt-3" onClick={nextPage}>ไม่</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeName;
