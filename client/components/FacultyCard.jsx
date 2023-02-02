import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Popup from "reactjs-popup";

export default function ManagementCard() {
  return (
    <Popup
      trigger={
        <div className="faculty-card relative cursor-pointer rounded-xl ">
          <Image
            src={
              "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
            }
            alt={"Sir the greate"}
            height={364}
            width={384}
            className="rounded-t-xl"
          />
          <div className="overlay absolute flex items-end justify-start opacity-0 text-center bottom-0 rounded-xl h-0 w-full   bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.5)] text-orange text-xl ">
            <p className="text-center p-3 m-3 font-black text-2xl">Joe Shmoe</p>
          </div>
        </div>
      }
      modal
    >
      {(close) => (
        <div className="popup-container flex flex-col">
          <button className="self-end px-5 pt-3 text-4xl" onClick={close}>
            &times;
          </button>
          <div className="content  flex gap-5 !p-10">
            <Image
              src={
                "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
              }
              alt={"Sir the greate"}
              height={364}
              width={384}
              className="rounded-t-xl"
            />
            <div className="text overflow-hidden">
              <h1 className=" name font-bold text-orange text-2xl">
                Joe Shmoe
              </h1>
              <p className="subject font-normal text-xm text-orange my-3">
                Computer Science
              </p>
              <p className="subject font-normal text-xm ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                error doloremque culpa iste non recusandae suscipit, impedit
                nam, accusantium quia hic architecto possimus tempore! Dicta
                iusto quaerat asperiores architecto atque!
              </p>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
}
