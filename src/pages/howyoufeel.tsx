import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const Howyoufeel: FC = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/weknow");
  };

  return (
    <div className="flex justify-center fadeinscene font-season">
      <div
        className="w-full sm:w-1/4 text-center h-screen flex bg-cover bg-center"
        style={{ backgroundImage: "url('/pages/5.jpg')" }}
      >
        <div className="m-auto fadein pt-56">
          <p>แล้วตอนนี้คุณรู้สึกยังไงกับตัวเองบ้าง? </p><br /><br />
            <div>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              />
            <div className="text-bold text-lg cursor-pointer mt-8" onClick={nextPage}>
            <b>ต่อไป</b>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Howyoufeel;
