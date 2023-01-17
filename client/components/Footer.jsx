import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import logo from "../public/src/assets/sifal-logo.svg";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <footer>
        <div className="left"></div>
        <div className="links"></div>
        <div className="socials">
          <BsFacebook />
          <RiInstagramFill />
          <BsLinkedin/>
          <BsYoutube />
          <BsTwitter />
        </div>
      </footer>
    </>
  );
}
