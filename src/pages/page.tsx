import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    children: string | JSX.Element | JSX.Element[]
    path?: string,
    bg?: string,
    time? : number
};

const Page: FC<Props> = ({children, path, bg, time}) => {
  const navigate = useNavigate();
  if (time) {
    setTimeout(() => {
      if (path)
        navigate(path);
    }, time);
  } 
  
  return (
    <div className="flex justify-center fadeinscene font-season">
      <div
        className="w-full sm:w-1/4 text-center h-screen flex bg-cover bg-center"
        style={{ backgroundImage: `url('/pages/${bg}.jpg')` }}
      >
        <div className="m-auto fadein">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;
