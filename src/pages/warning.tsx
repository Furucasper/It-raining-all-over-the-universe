import React, { FC, RefObject } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  soundPlayer: RefObject<HTMLAudioElement>;
  secondSoundPlayer: RefObject<HTMLAudioElement>;
}

const Warning: FC<Props> = ({ soundPlayer, secondSoundPlayer }) => {
  const navigate = useNavigate();
  const nextPage = () => {
    if (soundPlayer.current) {
      soundPlayer.current.src = "/sounds/intro.mp3";
      soundPlayer.current.volume = 0.7;
      soundPlayer.current.load();
      soundPlayer.current.play();
    }
    if (secondSoundPlayer.current) {
      secondSoundPlayer.current.src = "";
      secondSoundPlayer.current.play();
    }
    navigate("/welcome");
  };

  return (
    <div className='bg-white'>
      <div className="flex justify-center fade-in-scene font-season">
        <div className="w-full bg-white text-center h-screen flex">
          <div className="m-auto [&>p]:text-lg max-w-sm fade-in">
            <p>
              เว็บไซต์นี้มีเนื้อหาเกี่ยวกับ "ตัวตน" <br />
              และสิ่งที่อาจกระตุ้นให้เกิดการย้อนคิด<br />
              ถึงเรื่องราวอันเปราะบางทางจิตใจ
            </p>
            <br />
            <br />
            <p>
              คุณสามารถหยุดเล่น<br />
              และออกจากเว็บไซต์นี้ได้ตลอดเวลา<br />
              เมื่อคุณรู้สึกไม่สบายใจ <br />
              <br />
              และสามารถกลับมาเข้าเล่นได้เสมอ <br />
              เมื่อคุณรู้สึกพร้อม
            </p>
            <br />
            <Link to='/cookie-policy'>Cookie Policy</Link>
            <br />
            <br />
            <button type="button" className="text-xl cursor-pointer" onClick={nextPage}>
              <b>&gt; ต่อไป &lt;</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warning;
