import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/pages/5.png"

const Intro: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/welcomename");
    }, 8000);
  }, [])

  return (
    <div className="flex justify-center fadeinscene font-season">
      <div
        className="w-full  text-center h-screen flex bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="m-auto fadein pt-48">
          <p>บ่ายแก่ ๆ ในวันหยุดวันหนึ่ง <br />
            คุณกำลังนั่งปลดปล่อยความคิด <br />
            ให้ล่องลอยไปในอากาศ</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
