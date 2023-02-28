import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PageLink from "../../components/admin/PageLink";
import routes from "../../routes";

export default function Dashboard() {
  const year = new Date().getFullYear();
  const adminPages = routes[0].adminLinks.map((admin) => {
    return (
      <Link
        href={admin.url}
        className="link-card-small hover:text-offWhite md:link-card hover:link-card-hover md:text-2xl lg:text-xl text-lg font-medium flex justify-center items-center card-shadow"
      >
        <PageLink title={admin.title} />
      </Link>
    );
  });
  const homePages = routes[0].homepage.map((home) => {
    return (
      <Link
        href={home.url}
        className="link-card-small hover:text-offWhite md:link-card hover:link-card-hover md:text-2xl lg:text-xl text-lg font-medium flex justify-center items-center card-shadow"
      >
        <PageLink title={home.title} />
      </Link>
    );
  });
  const aboutUs = routes[0].aboutUs.map((about) => {
    return (
      <Link
        href={about.url}
        className="link-card-small hover:text-offWhite md:link-card hover:link-card-hover md:text-2xl lg:text-xl text-lg font-medium flex justify-center items-center card-shadow"
      >
        <PageLink title={about.title} />
      </Link>
    );
  });
  const programs = routes[0].programs.map((program) => {
    return (
      <Link
        href={program.url}
        className="link-card-small hover:text-offWhite md:link-card hover:link-card-hover md:text-2xl lg:text-xl text-lg font-medium flex justify-center items-center card-shadow"
      >
        <PageLink title={program.title} />
      </Link>
    );
  });
  const community = routes[0].community.map((community) => {
    return (
      <Link
        href={community.url}
        className="link-card-small hover:text-offWhite md:link-card hover:link-card-hover md:text-2xl lg:text-xl text-lg font-medium flex justify-center items-center card-shadow"
      >
        <PageLink title={community.title} />
      </Link>
    );
  });
  const publications = routes[0].publications.map((publication) => {
    return (
      <Link
        href={publication.url}
        className="link-card-small hover:text-offWhite md:link-card hover:link-card-hover md:text-2xl lg:text-xl text-lg font-medium flex justify-center items-center card-shadow"
      >
        <PageLink title={publication.title} />
      </Link>
    );
  });
  const dssinYear = routes[0].dssInYear.map((item) => {
    return (
      <Link
        href={item.url}
        className="link-card-small hover:text-offWhite md:link-card hover:link-card-hover md:text-2xl lg:text-xl text-lg font-medium flex justify-center items-center card-shadow"
      >
        <PageLink title={item.title} />
      </Link>
    );
  });
  const otherPages = routes[0].otherPages.map((other) => {
    return (
      <Link
        href={other.url}
        className="link-card-small hover:text-offWhite md:link-card hover:link-card-hover md:text-2xl lg:text-xl text-lg font-medium flex justify-center items-center card-shadow"
      >
        <PageLink title={other.title} />
      </Link>
    );
  });

  return (
    <div className="main-container w-11/12 mx-auto">
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home w-full flex flex-col justify-center">
        <h3 className="md:text-3xl text-2xl font-bold my-5 w-full flex justify-center">
          Admin
        </h3>
        <div className="other-links grid-small sm:grid-medium lg:grid-large mb-10">
          {adminPages}
        </div>
        <br />
        <hr />
        <br />
        <h3 className="md:text-3xl text-2xl font-bold my-5 w-full flex justify-center">
          Homepage
        </h3>
        <div className="other-links grid-small sm:grid-medium lg:grid-large mb-10">
          {homePages}
        </div>
      </div>
      <br />
      <hr />
      <br />
      <h3 className="md:text-3xl text-2xl font-bold my-5 w-full flex justify-center">
        About Us
      </h3>
      <div className="other-links grid-small sm:grid-medium lg:grid-large mb-10">
        {aboutUs}
      </div>
      <br />
      <hr />
      <br />
      <h3 className="md:text-3xl text-2xl font-bold my-5 w-full flex justify-center">
        Programs
      </h3>
      <div className="other-links grid-small sm:grid-medium lg:grid-large mb-10">
        {programs}
      </div>
      <br />
      <hr />
      <br />
      <h3 className="md:text-3xl text-2xl font-bold my-5 w-full flex justify-center">
        Community
      </h3>
      <div className="other-links grid-small sm:grid-medium lg:grid-large mb-10">
        {community}
      </div>
      <br />
      <hr />
      <br />
      <h3 className="md:text-3xl text-2xl font-bold my-5 w-full flex justify-center">
        Publications
      </h3>
      <div className="other-links grid-small sm:grid-medium lg:grid-large mb-10">
        {publications}
      </div>
      <br />
      <hr />
      <br />
      {/* <h3 className="md:text-3xl text-2xl font-bold my-5 w-full flex justify-center">
        DSS in {year}
      </h3>
      <div className="other-links grid-small sm:grid-medium lg:grid-large mb-10">
        {dssinYear}
      </div>
      <br />
      <hr />
      <br /> */}
      <h3 className="md:text-3xl text-2xl font-bold my-5 w-full flex justify-center">
        Other Pages
      </h3>
      <div className="other-links grid-small sm:grid-medium lg:grid-large mb-10">
        {otherPages}
      </div>
      <br />
      <hr />
      <br />
    </div>
  );
}
