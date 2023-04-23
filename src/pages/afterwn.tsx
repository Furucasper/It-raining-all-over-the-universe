import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/pages/5.png"

const AfterWN: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/howyoufeel");
    }, 5000);
  }, [])

  return (
    <div className="flex justify-center font-season">
      <div
        className="w-full  text-center h-screen flex bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="m-auto fadein pt-36">
          <p>เป็นอย่างนั้นเองเหรอ</p>
        </div>
      </div>
    </div>
  );
};

export default AfterWN;
