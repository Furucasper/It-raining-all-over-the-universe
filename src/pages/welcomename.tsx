import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    name: string
}

const WelcomeName: FC<Props> = ({name}) => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/afterwn");
  };

  return (
    <div className="flex justify-center font-season">
      <div
        className="w-full  text-center h-screen flex bg-cover bg-center"
        style={{ backgroundImage: "url('/pages/5.PNG')" }}
      >
        <div className="m-auto fadein pt-56">
          <p>สวัสดีคุณ {name}<br />
            ช่วงนี้คุณสบายดีไหม ?</p><br />
            <div>
                <div className="bg-gray-300 p-3 w-48 rounded cursor-pointer" onClick={nextPage}>ใช่</div>
                <div className="bg-gray-300 p-3 w-48 rounded mt-3 cursor-pointer" onClick={nextPage}>ไม่</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeName;
