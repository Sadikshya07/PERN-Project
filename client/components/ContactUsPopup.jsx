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
        <div className="popup-container flex flex-col">
          <div className="content  flex gap-5 ">
            <RiMapPin2Fill />
            <RiPhoneFill />
            <BsFillEnvelopeFill />
            <BsClock />
            <FaChrome />
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ContactUsPopup;
