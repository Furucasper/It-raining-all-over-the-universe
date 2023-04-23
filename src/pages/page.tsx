import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    children: string | JSX.Element | JSX.Element[]
    path?: string,
    bg?: string,
    time? : number
    fadeinscene?: boolean
};

const Page: FC<Props> = ({children, path, bg, time, fadeinscene}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (time) {
      setTimeout(() => {
        if (path)
          navigate(path);
      }, time);
    } 
  }, []);
  
  return (
    <div className={"flex justify-center font-season" + (fadeinscene ? " fadeinscene" : "")}>
      <div
        className="w-full  text-center h-screen flex bg-cover bg-center"
        style={{ backgroundImage: `url(${bg ? require("../assets/pages/" + bg) : ''})` }}
      >
        <div className="m-auto fadein">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;
