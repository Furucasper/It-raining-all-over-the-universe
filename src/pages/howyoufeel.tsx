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
    }
  };

  
  useEffect(() => {
    inputRef.current?.focus();
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
        style={{ backgroundImage: "url('/pages/5.PNG')" }}
      >
        <div className="m-auto fadein pt-56">
          <p>แล้วตอนนี้คุณรู้สึกยังไงกับตัวเองบ้าง? </p><br /><br />
            <div>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                ref={inputRef}
              />
            <div className="text-bold text-lg cursor-pointer mt-8" onClick={nextPage}>
            <b>ต่อไป</b>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Howyoufeel;
