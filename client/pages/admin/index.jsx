import Head from "next/head";
import Image from "next/image";
import logo from "../../public/src/assets/dssblue.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>DSS | Admin</title>
        <meta name="description" content="Sifal School Admin Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main-container relative h-screen">
        <div
          className="w-screen h-full absolute"
          style={{
            background: "url(src/assets/dss-cover.jpeg)",
            backgroundSize: "cover",
          }}
        >
        </div>
          <div className="absolute bg-orange opacity-50 w-full h-full"></div>
        <div className="w-full h-full absolute orm-container flex flex-col justify-center items-center">
          <form
            action=""
            className="flex flex-col w-[30em] px-12 py-14 rounded-xl bg-offWhite"
          >
            <Image src={logo} alt="dss logo" width = {280} className="mx-auto mb-8" />
            <div className="username mb-2">
              <label htmlFor="username" className="text-lg font-medium">
                Username:
              </label>
              <br />
              <input
                type="text"
                id="username"
                name="username"
                className="bg-gray-50 border text-sm rounded-lg focus:border-orange w-full p-2.5"
              />
            </div>
            <div className="password">
              <label htmlFor="password" className="text-lg font-medium">
                Password:
              </label>
              <br />
              <input
                type="password"
                id="password"
                name="username"
                className="bg-gray-50 border text-sm rounded-lg focus:border-orange w-full p-2.5"
              />
            </div>
            <br />
            <button
              type="submit"
              className="text-white bg-orange hover:bg-[#cb5c1c]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Log in
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
