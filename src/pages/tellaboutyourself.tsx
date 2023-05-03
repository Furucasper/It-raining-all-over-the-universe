import { FC, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  changeSound?: () => void;
  changeSecondSound?: () => void;
  changeSFX?: () => void;
}

const TellAboutYourself: FC<Props> = ({ changeSound, changeSecondSound, changeSFX }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const [fadeout, setFadeout] = useState(false)

    const nextPage = () => {
        if (inputRef.current?.value) {
            setFadeout(true)
            changeSound && changeSound();
            changeSecondSound && changeSecondSound();
            changeSFX && changeSFX();
            setTimeout(() => {
                navigate("/knowyourself");
            }, 1500)
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
        <div className="bg-white">
            <div className={"flex justify-center font-season" + (fadeout ? " fade-out" : "")}>
                <div
                    className="w-full  text-center h-screen flex bg-cover bg-center"
                    style={{ backgroundImage: "url('/pages/night-window.gif')" }}
                >
                    <div className="m-auto fade-in pt-[11rem]">
                        <p className="leading-relaxed">วันนี้เราอยากรู้จักคุณให้มากขึ้น<br />
                            คุณคือใคร? ช่วยอธิบายตัวตนของคุณ<br />
                            ให้เราฟังหน่อยสิ </p>
                        <div>
                            <input
                                type="text"
                                className="mt-3.5"
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
        </div>
    );
};

export default TellAboutYourself;
