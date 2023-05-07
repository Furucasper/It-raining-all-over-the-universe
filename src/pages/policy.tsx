import  { FC } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Policy: FC = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/name");
  };

  return (
    <div className="bg-white w-full text-center h-screen flex bg-contain bg-no-repeat bg-center font-season"
      style={{ backgroundImage: "url('/pages/1.gif')" }}
    >
      <Helmet>
        <link rel='prefetch' href='/sounds/evening-window.mp3' as='audio' type='audio/mpeg' crossOrigin="anonymous" />
      </Helmet>
      <div className=" w-full flex flex-col justify-center items-center  fade-in">
        <div className="[&>p]:text-lg">
          <p className="mt-12">
            และที่สำคัญที่สุด <br />
            เว็บไซต์นี้ไม่ได้เก็บข้อมูลของคุณ <br />
            เพื่อนำไปเผยแพร่ทางใด <br />
          </p>
          <br />
          <br />
          <p>
            คุณสามารถเป็นตัวของตนเอง
            <br />
            ได้เต็มที่เลยนะ
            <br />
            <br />
            <br />
            Just Be You <br />
            You are unique in your own ways
          </p>
          <br />
          <br />
          <button type="button" className="text-xl cursor-pointer" onClick={nextPage}>
            <b>&gt; ต่อไป &lt;</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Policy;
