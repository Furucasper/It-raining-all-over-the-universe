import  { FC } from "react";

interface Props {
    children?: string | JSX.Element | JSX.Element[]
    bg?: string,
    fadeInScene?: boolean
    onBlack?: boolean;
};

const Page: FC<Props> = ({ children, bg, fadeInScene, onBlack = true }) => {
  
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
