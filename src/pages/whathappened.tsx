import { FC, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

interface Props {
  changeSound?: () => void;
  changeSecondSound?: () => void;
  changeSFX?: () => void;
}

const WhatHappened: FC<Props> = ({ changeSound, changeSecondSound, changeSFX }) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()

  const [fadeout, setFadeout] = useState(false)

  const nextPage = () => {
    if (inputRef.current?.value) {
      changeSound && changeSound()
      changeSecondSound && changeSecondSound()
      changeSFX && changeSFX()
      setFadeout(true)
      setTimeout(() => {
        navigate("/ahh");
      }, 1000)
    } else {
      alert("กรุณาตอบคำถาม");
      inputRef.current?.focus()
    }
  };


  return (
    <div className="bg-white">
      <Helmet>
        <link rel='prefetch' href='/sounds/night-window.mp3' as='audio' type='audio/mpeg' crossOrigin="anonymous" />
        <link rel="prefetch" href="/pages/night-window.gif" as="image" type="image/gif" crossOrigin="anonymous" />
      </Helmet>
      <div className="flex justify-center font-season">
        <div
          className="w-full  text-center h-screen flex bg-cover bg-center"
          style={{ backgroundImage: "url('/pages/evening-window.gif')" }}
        >
          <div className={"m-auto fade-in pt-[12rem] [&>*]:text-lg/loose" + (fadeout ? " fade-out" : "")}>
            <p>มีอะไรเกิดขึ้นในช่วงนี้<br />
              อย่างนั้นเหรอ?</p>
            <div>
              <input
                type="text"
                className="mt-3.5"
                autoComplete="off"
                ref={inputRef}
              />
              <br />
              <div className="text-bold text-lg cursor-pointer mt-4 px-4 py-1" onClick={nextPage}>
                <b>&gt; ต่อไป &lt;</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatHappened;
