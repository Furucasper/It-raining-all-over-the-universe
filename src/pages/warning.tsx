import React, { FC } from "react";
import { useNavigate } from 'react-router-dom';

const Warning: FC = () => {

  const navigate = useNavigate()
  const nextPage = () => {
    navigate('/welcome')
  }

  return (
    <div className="flex justify-center">
      <div
        className="w-full sm:w-1/4 text-center h-screen flex bg-cover bg-center"
        style={{ backgroundImage: "url('/pages/1.jpg')" }}
      >
        <div className="m-auto max-w-sm">
          <p>
            เว็บไซต์นี้มีเนื้อหาเกี่ยวกับ "ตัวตน" <br />
            และสิ่งที่อาจกระตุ้นให้เกิดการย้อนคิดถึงเรื่องราว<br />อันเปราะบางทางจิตใจ
          </p><br /><br />
          <p>
            คุณสามารถหยุดเล่นและออกจากเว็บไซต์นี้<br />
            ได้ตลอดเวลา เมื่อคุณรู้สึกไม่สบายใจ <br />
            และสามารถกลับมาเข้าเล่นได้เสมอ<br />
            เมื่อคุณรู้สึกพร้อม 
          </p><br /><br />
          <div className="text-bold text-lg cursor-pointer" onClick={nextPage}>ต่อไป</div>
        </div>
      </div>
    </div>
  );
};

export default Warning;
