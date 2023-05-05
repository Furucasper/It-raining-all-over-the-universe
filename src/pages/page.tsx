import { FC } from "react";

interface Props {
  children?: string | JSX.Element | JSX.Element[]
  bg?: string,
  bgVideo?: string,
  fadeInScene?: boolean
  onBlack?: boolean;
};

const Page: FC<Props> = ({ children, bg, bgVideo, fadeInScene, onBlack = true }) => {

  return (
    <div className={"flex flex-col justify-center font-season" + (fadeInScene ? " fade-in-scene" : "")}>
      <div
        className={"w-full h-screen flex bg-cover bg-center text-center " + (onBlack ? "bg-black text-white" : "bg-white text-black")}
        style={{ backgroundImage: `url('/pages/${bg}')` }}
      >
        {bgVideo && <video className="z-[0] object-cover absolute w-full h-full" autoPlay loop muted playsInline>
          <source src={`/pages/${bgVideo}`} type="video/mp4" />
        </video>}
        <div className="m-auto fade-in z-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;
