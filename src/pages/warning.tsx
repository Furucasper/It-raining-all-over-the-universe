import React, { FC, RefObject } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  soundPlayer: RefObject<HTMLAudioElement>;
  secondSoundPlayer: RefObject<HTMLAudioElement>;
  sfxPlayer: RefObject<HTMLAudioElement>;
}

const Warning: FC<Props> = ({ soundPlayer, secondSoundPlayer, sfxPlayer }) => {
  const navigate = useNavigate();
  const nextPage = () => {
    soundPlayer.current?.play();
    secondSoundPlayer.current?.play();
    sfxPlayer.current?.play();
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

export default Warning;
