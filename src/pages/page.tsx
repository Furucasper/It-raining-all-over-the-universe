import  { FC } from "react";

interface Props {
    children?: string | JSX.Element | JSX.Element[]
    bg?: string,
    fadeInScene?: boolean
};

const Page: FC<Props> = ({children, bg, fadeInScene}) => {
  
  return (
    <div className={"flex justify-center font-season" + (fadeInScene ? " fade-in-scene" : "")}>
      <div
        className="w-full  text-center h-screen flex bg-cover bg-center"
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
