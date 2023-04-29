import React, { FC } from "react";

interface Props {
    onGoing: (ans: boolean) => void
}

const Myself: FC<Props> = ({onGoing}) => {

  return (
    <div className="flex justify-center font-season">
      <div
        className="w-full  text-center h-screen flex bg-cover bg-center fade-in-scene overlay"
        style={{ backgroundImage: "url('/pages/night-window.gif')" }}
      >
        <div className="m-auto fade-in pt-[13rem]">
          <p>แล้วคุณเคยรู้สึกไม่เข้าใจตัวเองบ้างไหม?</p><br />
            <div>
                <div className="btn-primary" onClick={e => onGoing(true)}>ใช่</div>
                <div className="btn-primary mt-3" onClick={e => onGoing(false)}>ไม่</div>
            </div>
        </div>
      </div>
      {/* <div
        className="w-full  text-center h-screen flex bg-cover bg-center"
        style={{ backgroundImage: "url('/pages/window.PNG')" }}
      ></div> */}
    </div>
  );
};

export default Myself;
