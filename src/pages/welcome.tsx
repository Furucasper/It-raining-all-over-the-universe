import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/pages/2.jpg"

const Welcome: FC = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/policy");
  };

  return (
    <div className="flex justify-center fadeinscene font-season">
      <div
        className="w-full  text-center h-screen flex bg-cover bg-center pt-24"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="m-auto text-sm md:text-xs max-w-sm fadein">
          <p>
            เว็บไซต์นี้เป็นส่วนหนึ่งของปริญญานิพนธ์ <br />
            คณะนิเทศศาสตร์ <br />
            จุฬาลงกรณ์มหาวิทยาลัย
          </p>
          <br />
          <br />
          <p>
            "ณ ที่แห่งหนึ่งของจักรวาลอาจมีฝนกำลังตกอยู่ <br />
            แม้จะดูเป็นไปไม่ได้ แต่อาจมีอยู่จริงหรือไม่?"
          </p>
          <br />
          <br />
          <p>
            เว็บไซต์นี้ไม่ใช่แบบประเมินทางจิตวิทยา <br />
            แต่เกิดขึ้นเพื่อสนับสนุนการค้นหาคำตอบ <br />
            ที่อาจมองไม่เห็นแต่มีอยู่ เหมือนกับตัวตนของเรา
            <br />
            ที่ไม่อาจเห็นได้ทุกด้าน แต่ด้านเหล่านั้นมีอยู่จริง
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

export default Welcome;
