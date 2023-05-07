import { FC, useState } from "react";

interface Props {
  children?: string | JSX.Element | JSX.Element[]
  bg?: string,
  bgVideo?: string,
  fadeInScene?: boolean
  onBlack?: boolean;
  fadeoutOnClicked?: boolean;
};

const Page: FC<Props> = ({ children, bg, bgVideo, fadeInScene, onBlack = true, fadeoutOnClicked }) => {

  const [fadeout, setFadeout] = useState(false)

  const handleClick = () => {
    if (fadeoutOnClicked) {
      setFadeout(true)
    }
  }

  return (
    <div className={"w-full flex flex-col justify-center font-season" + (fadeInScene ? " fade-in-scene" : "")}>
      <div
        className={"w-full h-screen flex bg-cover bg-center text-center " + (onBlack ? "bg-black text-white" : "bg-white text-black")}
        style={{ backgroundImage: `url('/pages/${bg}')` }}
        onClick={handleClick}
      >
        {bgVideo && <video className="z-[0] object-cover absolute w-full h-full" autoPlay loop muted playsInline>
          <source src={`/pages/${bgVideo}`} type="video/mp4" />
        </video>}
        <div className={"w-full m-auto fade-in z-1" + (fadeout ? " fade-out" : "")}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;
