import { FC } from "react";

const AfterWN: FC = () => {

  return (
    <div className="flex justify-center font-season">
      <div
        className="w-full  text-center h-screen flex bg-cover bg-center"
        style={{ backgroundImage: "url('/pages/daytime-window.gif')" }}
      >
        <div className="m-auto fade-in pt-40">
          <p className="text-lg">เป็นอย่างนั้นเองเหรอ</p>
        </div>
      </div>
    </div>
  );
};

export default AfterWN;
