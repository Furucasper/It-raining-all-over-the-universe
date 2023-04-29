import { FC, Dispatch, RefObject, useEffect } from "react";

interface Props {
  soundPlayer?: RefObject<HTMLAudioElement>;
}

const Intro: FC<Props> = ({ soundPlayer }) => {

  useEffect(() => {
    if (soundPlayer?.current) {
      soundPlayer.current.src = '/sounds/wind-with-window.mp3'
      soundPlayer.current.volume = 1
    }
  }, [])

  return (
    <div className="flex justify-center fade-in-scene font-season">
      <div
        className="w-full  text-center h-screen flex bg-cover bg-center"
        style={{ backgroundImage: "url('/pages/daytime-window.gif')" }}
      >
        <div className="m-auto fade-in pt-44">
          <p className="text-lg/loose">บ่ายแก่ ๆ ในวันหยุดวันหนึ่ง <br />
            คุณกำลังนั่งปลดปล่อยความคิด <br />
            ให้ล่องลอยไปในอากาศ</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
