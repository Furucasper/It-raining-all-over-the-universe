import React, { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  changeSound?: () => void;
  changeSecondSound?: () => void;
  changeSFX?: () => void;
}

const Howyoufeel: FC<Props> = ({ changeSound, changeSecondSound, changeSFX }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const nextPage = () => {
    if (inputRef.current?.value) {
      changeSound && changeSound();
      changeSecondSound && changeSecondSound();
      changeSFX && changeSFX();
      navigate("/weknow");
    } else {
      alert("กรุณาตอบคำถาม");
      inputRef.current?.focus()
    }
  };

  
  useEffect(() => {
    inputRef.current?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        nextPage();
      }
    });
  }, []);
  
  return (
    <div className="flex justify-center font-season">
      <div
        className="w-full  text-center h-screen flex bg-cover bg-center"
        style={{ backgroundImage: "url('/pages/daytime-window.gif')" }}
      >
        <div className="m-auto fade-in pt-40">
        <br />
          <p className="text-lg">แล้วตอนนี้คุณรู้สึกยังไงกับตัวเองบ้าง? </p><br />
            <div>
            <input
                autoComplete="off"
                ref={inputRef}
              />
            <div className="text-xl cursor-pointer mt-5" onClick={nextPage}>
            <b>&gt; ต่อไป &lt;</b>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Howyoufeel;
