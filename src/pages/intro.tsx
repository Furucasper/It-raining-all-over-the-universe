import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const Intro: FC = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/welcomename");
  }, 5000);

  return (
    <div className="flex justify-center fadeinscene font-season">
      <div
        className="w-full sm:w-1/4 text-center h-screen flex bg-cover bg-center"
        style={{ backgroundImage: "url('/pages/5.jpg')" }}
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
