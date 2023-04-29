import React, { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TellAboutYourself: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const nextPage = () => {
        console.log(inputRef.current?.value);
        console.log(inputRef.current);
        if (inputRef.current?.value) {
            navigate("/knowyourself");
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
                style={{ backgroundImage: "url('/pages/night-window.gif')" }}
            >
                <div className="m-auto fade-in pt-[11rem]">
                    <p>วันนี้เราอยากรู้จักคุณให้มากขึ้น<br />
                        คุณคือใคร? ช่วยอธิบายตัวตนของคุณ<br />
                        ให้เราฟังหน่อยสิ </p>
                    <div>
                        <input
                            className="mt-3.5"
                            type="text"
                            autoComplete="off"
                            ref={inputRef}
                        />
                        <br />
                        <br />
                        <div className="text-bold text-lg cursor-pointer" onClick={nextPage}>
                            <b>&gt; ต่อไป &lt;</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TellAboutYourself;
