import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import logo from "../public/src/assets/sifal-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../components/Sidebar";
import NavbarOverlay from "../components/NavbarOverlay";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <>
      {/* <Head>
        <body className={`${isOverlayOpen ? "bg-orange" : ""}`}></body>
      </Head> */}

      <nav className="sticky top-0 bg-orange w-full py-2 flex justify-center z-50">
        <div className="w-11/12 flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="dss logo" />
          </Link>
          <GiHamburgerMenu
            className="toggle-overlay text-offWhite text-3xl cursor-pointer sm:block hidden"
            onClick={() => setIsOverlayOpen(!isOverlayOpen)}
          />
          <GiHamburgerMenu
            className="toggle-sidebar text-offWhite text-3xl cursor-pointer sm:hidden block"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
        <Sidebar
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />
        <NavbarOverlay
          onClick={() => setIsOverlayOpen(!isOverlayOpen)}
          isOverlayOpen={isOverlayOpen}
        />
      </nav>
    </>
  );
}
