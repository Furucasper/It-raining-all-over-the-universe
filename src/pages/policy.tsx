import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const Policy: FC = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/name");
  };

  return (
    <div className="bg-white">
      <div className="flex justify-center font-season">
        <div
          className="w-full  text-center h-screen flex bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/pages/1.gif')" }}
        >
          <div className="m-auto [&>p]:text-base max-w-sm fade-in">
            <p className="mt-12">
              และที่สำคัญที่สุด <br />
              เว็บไซต์นี้ไม่ได้เก็บข้อมูลของคุณ <br />
              เพื่อนำไปเผยแพร่ทางใด <br />
            </p>
            <br />
            <br />
            <p>
              คุณสามารถเป็นตัวของตนเอง
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
            <div className="text-xl cursor-pointer" onClick={nextPage}>
              <b>&gt; ต่อไป &lt;</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
