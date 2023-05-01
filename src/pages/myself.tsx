import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  playBtnClickSFX: () => void;
}

const Myself: FC<Props> = ({ playBtnClickSFX }) => {

  const navigate = useNavigate()

  const onClickYes = () => {
    playBtnClickSFX()
    navigate('/yesmyself')
  }

  const onClickNo = () => {
    playBtnClickSFX()
    navigate('/nomyself')
  }

  return (
    <div className="bg-white">
      <div className="flex justify-center font-season">
        <div
          className="w-full  text-center h-screen flex bg-cover bg-center"
          style={{ backgroundImage: "url('/pages/night-window.gif')" }}
        >
          <div className="m-auto fade-in pt-[13rem] [&>*]:text-lg/loose">
            <p>แล้วคุณเคยรู้สึกไม่เข้าใจตัวเองบ้างไหม?</p><br />
            <div>
              <div className="btn-primary" onClick={onClickYes}>ใช่</div>
              <div className="btn-primary mt-3" onClick={onClickNo}>ไม่</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myself;
