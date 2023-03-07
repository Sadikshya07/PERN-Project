import routes from "../../routes";
import Link from "next/link";
import Image from "next/image";
import PageLink from "../../components/admin/PageLink";
import logo from "../../public/src/assets/sifal-logo.svg";

export default function AdminSidebar() {
  const adminPages = routes[0].adminLinks.map((admin) => {
    return (
      <Link href={admin.url} className="link text-offWhite text-lg">
        <PageLink title={admin.title} />
      </Link>
    );
  });
  const homePages = routes[0].homepage.map((home) => {
    return (
      <Link href={home.url} className="link text-offWhite text-lg">
        <PageLink title={home.title} />
      </Link>
    );
  });
  const aboutUs = routes[0].aboutUs.map((about) => {
    return (
      <Link href={about.url} className="link text-offWhite text-lg">
        <PageLink title={about.title} />
      </Link>
    );
  });
  const programs = routes[0].programs.map((program) => {
    return (
      <Link href={program.url} className="link text-offWhite text-lg">
        <PageLink title={program.title} />
      </Link>
    );
  });
  const community = routes[0].community.map((community) => {
    return (
      <Link href={community.url} className="link text-offWhite text-lg">
        <PageLink title={community.title} />
      </Link>
    );
  });
  const publications = routes[0].publications.map((publication) => {
    return (
      <Link href={publication.url} className="link text-offWhite text-lg">
        <PageLink title={publication.title} />
      </Link>
    );
  });
  const dssinYear = routes[0].dssInYear.map((item) => {
    return (
      <Link href={item.url} className="link text-offWhite text-lg">
        <PageLink title={item.title} />
      </Link>
    );
  });
  const otherPages = routes[0].otherPages.map((other) => {
    return (
      <Link href={other.url} className="link text-offWhite text-lg">
        <PageLink title={other.title} />
      </Link>
    );
  });
  return (
    <div className="main-container w-[22rem] bg-orange h-screen overflow-y-auto">
      <div className="logo-container">
        <Image src={logo} alt="dss logo" className="mx-auto my-2" />
      </div>
      <div className="links-container ml-10">
        <div className="admin-pages mb-4">
          <h1 className="text-offWhite text-2xl font-bold mb-2">Admin</h1>
          {adminPages}
          <hr className="w-11/12 text-offWhite mt-2"/>
        </div>
        <div className="homepage mb-4">
          <h1 className="text-offWhite text-2xl font-bold mb-2">Homepage</h1>
          {homePages}
          <hr className="w-11/12 text-offWhite mt-2"/>
        </div>
        <div className="about-us mb-4">
          <h1 className="text-offWhite text-2xl font-bold mb-2">About Us</h1>
          {aboutUs}
          <hr className="w-11/12 text-offWhite mt-2"/>
        </div>
        <div className="programs mb-4">
          <h1 className="text-offWhite text-2xl font-bold mb-2">Programs</h1>
          {programs}
          <hr className="w-11/12 text-offWhite mt-2"/>
        </div>
        <div className="community mb-4">
          <h1 className="text-offWhite text-2xl font-bold mb-2">Community</h1>
          {community}
          <hr className="w-11/12 text-offWhite mt-2"/>
        </div>
        <div className="publications mb-4">
          <h1 className="text-offWhite text-2xl font-bold mb-2">Publications</h1>
          {publications}
          <hr className="w-11/12 text-offWhite mt-2"/>
        </div>
        <div className="otherPages mb-4">
          <h1 className="text-offWhite text-2xl font-bold mb-2">Other Pages</h1>
          {otherPages}
          <hr className="w-11/12 text-offWhite mt-2"/>
        </div>
      </div>
    </div>
  );
}
