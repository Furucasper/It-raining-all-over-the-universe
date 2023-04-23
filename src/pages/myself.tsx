import React, { FC } from "react";

interface Props {
    onGoing: (ans: boolean) => void
}

const Myself: FC<Props> = ({onGoing}) => {

  return (
    <div className="flex justify-center font-season">
      <div
        className="w-full  text-center h-screen flex bg-cover bg-center fadeinscene overlay"
        style={{ backgroundImage: "url('/pages/11.gif')" }}
      >
        <div className="m-auto fadein pt-56">
          <p>แล้วคุณเคยรู้สึกไม่เข้าใจตัวเองบ้างไหม?</p><br />
            <div>
                <div className="bg-gray-300 p-3 rounded cursor-pointer" onClick={e => onGoing(true)}>ใช่</div>
                <div className="bg-gray-300 p-3 rounded mt-3 cursor-pointer" onClick={e => onGoing(false)}>ไม่</div>
            </div>
        </div>
      </div>
      <div
        className="w-full  text-center h-screen flex bg-cover bg-center"
        style={{ backgroundImage: "url('/pages/window.png')" }}
      ></div>
    </div>
  );
};

export default Myself;
