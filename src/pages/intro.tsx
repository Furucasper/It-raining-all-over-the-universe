import { FC, RefObject, useEffect } from "react";

interface Props {
  soundPlayer?: RefObject<HTMLAudioElement>;
  secondSoundPlayer?: RefObject<HTMLAudioElement>;
}

const Intro: FC<Props> = ({ soundPlayer, secondSoundPlayer }) => {

  useEffect(() => {
    if (soundPlayer?.current) {
      soundPlayer.current.src = '/sounds/window-long-to-light-off.mp3'
    }

    if (secondSoundPlayer?.current) {
      secondSoundPlayer.current.src = '/sounds/wind-with-window.mp3'
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
