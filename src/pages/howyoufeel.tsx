import React, { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Howyoufeel: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const nextPage = () => {
    console.log(inputRef.current?.value);
    console.log(inputRef.current);
    if (inputRef.current?.value) {
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
                type="text"
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
