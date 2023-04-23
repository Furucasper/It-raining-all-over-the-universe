import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const Policy: FC = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/name");
  };

  return (
    <div className="flex justify-center fadeinscene font-season">
      <div
        className="w-full  text-center h-screen flex bg-cover bg-center"
        style={{ backgroundImage: "url('/pages/1.jpg')" }}
      >
        <div className="m-auto text-sm md:text-xs max-w-sm fadein">
          <p className="mt-12">
            และที่สำคัญที่สุด เว็บไซต์นี้ไม่ได้เก็บข้อมูล <br />
            หรือเผยแพร่ข้อมูลทางใด
          </p>
          <br />
          <br />
          <p>
            เพราะฉะนั้น คุณสามารถเป็นตัวของตนเอง
            <br />
            ได้เต็มที่เลยนะ
            <br />
            <br />
            <br />
            Just Be You <br />
            You are unique in your own ways
          </p>
          <br />
          <br />
          <div className="text-bold text-lg cursor-pointer" onClick={nextPage}>
            <b>ต่อไป</b> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
