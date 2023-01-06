import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function PageLink(props) {
  return (
    <div className="links w-[100px]">
      {console.log(props.link)}
      {props.title}
    </div>
  );
}
