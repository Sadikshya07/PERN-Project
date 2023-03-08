import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AdminLayout from "../../../components/Layouts/AdminLayout";

export default function Metrics() {
  return (
    <div>
      <Head>
        <title>Admin | School Activities</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="main-container">
          <h1>School Activities</h1>
          <h3>Recommended to have at least 6 URLs to be displayed at a time.</h3>
          <form>
          <label htmlFor="name"> URL:</label>
              <input
                type="text"
                id="url"
                placeholder="URL"
                className="border-2"
                required
              ></input>
              <br />
            <button type="submit" className="border-2">
              Submit
            </button>
          </form>
        </div>
      </AdminLayout>
    </div>
  );
}
