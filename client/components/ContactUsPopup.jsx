import Popup from "reactjs-popup";
import Image from "next/image";
import { RiMapPin2Fill, RiPhoneFill } from "react-icons/ri";
import { BsFillEnvelopeFill, BsClock } from "react-icons/bs";
import { FaChrome } from "react-icons/fa";

const ContactUsPopup = ({}) => {
  return (
    <Popup
      trigger={
        <div className="mb-3 text-offWhite text-xl font-medium cursor-pointer">
          Contact Us
        </div>
      }
      modal
    >
      {(close) => (
        <div className="popup-container modal flex flex-col rounded-xl">
          <div className="content  flex justify-around flex-col items-center gap-5 rounded-xl text-orange ">
            <div className="top-div m-3 flex gap-10 ">
              <p className="text-center flex flex-col items-center font-semibold text-sm">
                <RiMapPin2Fill size={35} />
                <span className="text-black ">
                  Sifal, Kathmandu, <br /> Nepal
                </span>
              </p>
              <p className="text-center  font-semibold text-sm flex flex-col items-center">
                <RiPhoneFill size={35} />
                <span className="text-black">
                  01-4478482
                  <br />
                  9851064445
                </span>
              </p>
              <p className="text-center font-semibold text-sm flex flex-col items-center">
                <BsFillEnvelopeFill size={35} />
                <span className="text-black font-semibold text-sm">
                  contact@sifal.deerwalk.
                  <br />
                  edu.np
                </span>
              </p>
            </div>
            <div className="bottom-div m-3 flex  gap-10">
              <p className="flex flex-col items-center">
                <BsClock size={35} />
                <span className="text-black font-semibold text-sm">
                  Monday to Friday <br />
                  (9:00 AM - 5:00 PM)
                </span>
              </p>
              <p className="flex flex-col items-center">
                <FaChrome size={35} />
                <span className="text-black font-semibold text-sm">
                  deerwalk.edu.np
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ContactUsPopup;
