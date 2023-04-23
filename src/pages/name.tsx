import React, { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/pages/4.jpg"

interface Props {
  onNameChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value? : string
}

const Name: FC<Props> = ({
  onNameChange, value
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const nextPage = () => {
    if(inputRef.current?.value) {
      navigate("/intro");
    }else {
      alert("กรุณากรอกชื่อของคุณ")
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
      <div className="w-full  text-center h-screen flex">
        <div className="m-auto fadein">
          <img src={logo} alt="logo" />
          <br />
          <p>
            ยินดีต้อนรับเข้าสู่จักรวาล
            <br />
            Via Lactea
          </p>
          <br />
          <br />
          <div className="mb-12 flex justify-center">
            <div className="w-3/4">
              <label
                className="block text-gray-700 text-left text-sm font-bold mb-2"
              >
                ชื่อ:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={value}
                ref={inputRef}
                onChange={e => {if (onNameChange) {
                  onNameChange(e)
                  console.log(e.target.value)
                }}}
              />
            </div>
          </div>
          <div className="text-bold text-lg cursor-pointer" onClick={nextPage}>
            <b>ต่อไป</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;
