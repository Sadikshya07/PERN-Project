import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PageLink from "../../components/admin/PageLink";

export default function Dashboard() {
  const links = [
    { title: "Home", url: "/admin/home/heroimages" },
    { title: "Home", url: "/admin/home/heroimages" },
    { title: "Home", url: "/admin/home/heroimages" },
    { title: "Home", url: "/admin/home/heroimages" },
  ];

  return (
    <div className="main-container">
      <div className="home w-full flex flex-col justify-center">
        <h3 className="text-2xl w-full text-center">Home</h3>
        <div className="home-links w-full flex justify-around">
          <Link href="/admin/home/heroimages">Add Images</Link>
          <Link href="/admin/home/metrics">Metrics</Link>
          <Link href="/admin/home/programs">Programs</Link>
        </div>
      </div>
      <div className="other-links w-full h-auto flex flex-col">
        {links.map((link) => (
          <Link href = {link.url}>
            <PageLink title={link.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
