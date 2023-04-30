import React, { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

interface Props {
  onNameChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

const Name: FC<Props> = ({
  onNameChange, value
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const nextPage = () => {
    if (inputRef.current?.value) {
      navigate("/click-to-continue");
    } else {
      alert("กรุณากรอกชื่อของคุณ")
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
    <div className="bg-white">
      <div className="flex justify-center font-season">
        <Helmet>
          <link rel="prefetch" href="/pages/daytime-window.gif" as="image" type="image/gif" crossOrigin="anonymous" />
          <link rel="prefetch" href="/pages/evening-window.gif" as="image" type="image/gif" crossOrigin="anonymous" />
        </Helmet>
        <div className="w-full  text-center h-screen flex bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/pages/1.gif')" }}
        >
          <div className="mt-20 fade-in">
            <img className="w-[40%] m-auto" src="/images/logo.png" alt="logo" />
            <br />
            <p className="text-xl">
              ยินดีต้อนรับเข้าสู่จักรวาล
              <br />
              <b><i>Via Lactea</i></b>
            </p>
            <br />
            <br />
            <div className="mb-12 flex justify-center">
              <div className="w-1/2">
                <label
                  className="block text-gray-700 text-left text-lg mb-0.5"
                >
                  ชื่อ:
                </label>
                <input
                  placeholder="กรอกชื่อของคุณ"
                  autoComplete="off"
                  value={value}
                  ref={inputRef}
                  onChange={e => {
                    if (onNameChange) {
                      onNameChange(e)
                    }
                  }}
                />
              </div>
            </div>
            <div className="text-xl cursor-pointer" onClick={nextPage}>
              <b>&gt; ต่อไป &lt;</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;
