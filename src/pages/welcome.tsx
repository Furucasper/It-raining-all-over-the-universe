import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Welcome: FC = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/policy");
  };

  return (
    <div className="bg-white w-full text-center h-screen flex bg-cover bg-no-repeat bg-center font-season"
         style={{ backgroundImage: "url('/pages/1.gif')" }}
    >
      <Helmet>
        <link rel='prefetch' href='/sounds/sfx-story-intro.mp3' as='audio' type='audio/mpeg' crossOrigin="anonymous" />
        <link rel='prefetch' href='/sounds/window-light-off.mp3' as='audio' type='audio/mpeg' crossOrigin="anonymous" />
        <link rel='prefetch' href='/sounds/wind-with-window.mp3' as='audio' type='audio/mpeg' crossOrigin="anonymous" />
      </Helmet>
      <div className="m-auto [&>p]:text-lg max-w-sm fade-in pb-4">
        <img className="w-1/3 m-auto" src="/images/logo.png" alt="It's raining all over the universe" />
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
        <button type="button" className="text-xl cursor-pointer" onClick={nextPage}>
          <b>&gt; ต่อไป &lt;</b>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
