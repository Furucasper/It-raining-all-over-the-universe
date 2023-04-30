import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const Welcome: FC = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/policy");
  };

  return (
    <div className="bg-white">
      <div className="flex justify-center fade-in-scene font-season">
        <div
          className="w-full  text-center h-screen flex bg-contain bg-no-repeat bg-center pt-1"
          style={{ backgroundImage: "url('/pages/1.gif')" }}
        >
          <div className="m-auto [&>p]:text-base max-w-sm fade-in pb-4">
            <img className="w-1/3 m-auto" src="/images/logo.png" />
            <p className="mt-6">
              เว็บไซต์นี้เป็นส่วนหนึ่งของ<br />
              โครงการปริญญานิพนธ์<br />
              คณะนิเทศศาสตร์<br />
              จุฬาลงกรณ์มหาวิทยาลัย
            </p>
            <br />
            <p>
              “ณ ที่แห่งหนึ่งของจักรวาล<br />
              อาจมีฝนกำลังตกอยู่”<br />
            </p>
            <br />
            <p>
              เว็บไซต์นี้ไม่ใช่<br />
              แบบประเมินทางจิตวิทยา <br />
              แต่เกิดขึ้นเพื่อสนับสนุน<br />
              การตระหนักถึงสิ่งต่าง ๆ<br />
              ที่เกิดขึ้นกับตัวเองซึ่ง<br />
              จะนำไปสู่ความเข้าใจและ<br />
              การยอมรับในตนเอง<br />
              ในที่สุด<br />
            </p>
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

export default Welcome;
