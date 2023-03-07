import Head from "next/head";

export default function Popup() {
  const isLandscape = false;

  return (
    <div className="popup-container">
      {isLandscape ? 
      <div>
        "This is Landscape"
      </div> : 
        <div>
        "This is portrait"
        </div>
     }
    </div>
  );
}
