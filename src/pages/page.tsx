import  { FC, RefObject, useEffect } from "react";

interface Props {
    children?: string | JSX.Element | JSX.Element[]
    bg?: string,
    fadeInScene?: boolean
    onBlack?: boolean;
    playSound?: () => void;
    playSecondSound?: () => void;
    playSFX?: () => void;
};

const Page: FC<Props> = ({ children, bg, fadeInScene, onBlack = true, playSound, playSecondSound, playSFX }) => {

  useEffect(() => {
    playSound && playSound()
    playSecondSound && playSecondSound()
    playSFX && playSFX()
  }, [])
  
  return (
    <div className={"flex flex-col justify-center font-season" + (fadeInScene ? " fade-in-scene" : "")}>
      <div
        className={"w-full h-screen flex bg-cover bg-center text-center "  + (onBlack ? "bg-black text-white" : "bg-white text-black")}
        style={{ backgroundImage: `url('/pages/${bg}')` }}
      >
        <div className="m-auto fade-in">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;
