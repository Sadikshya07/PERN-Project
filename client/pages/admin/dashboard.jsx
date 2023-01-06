import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PageLink from "../../components/admin/PageLink";
import routes from "../../routes";

export default function Dashboard() {
  const adminPages = routes[0].adminLinks.map((admin) => {
    return (
      <Link
        href={admin.url}
        className="link-card-small md:link-card hover:link-card-hover md:text-2xl lg:text-xl text-lg font-medium flex justify-center items-center card-shadow"
      >
        <PageLink title={admin.title} />
      </Link>
    );
  });
  const homePages = routes[0].homepage.map((home) => {
    return (
      <Link
        href={home.url}
        className="link-card-small md:link-card hover:link-card-hover md:text-2xl lg:text-xl text-lg font-medium flex justify-center items-center card-shadow"
      >
        <PageLink title={home.title} />
      </Link>
    );
  });
  const otherPages = routes[0].other.map((other) => {
    return (
      <Link
        href={other.url}
        className="link-card-small md:link-card hover:link-card-hover md:text-2xl lg:text-xl text-lg font-medium flex justify-center items-center card-shadow"
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
        Other Pages
      </h3>
      <div className="other-links grid-small sm:grid-medium lg:grid-large mb-10">
        {otherPages}
      </div>
    </div>
  );
}
