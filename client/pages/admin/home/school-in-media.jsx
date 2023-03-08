import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AdminLayout from "../../../components/Layouts/AdminLayout";

export default function Metrics() {
  return (
    <div>
      <Head>
        <title>Add School in Media</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="main-container">
          <h1>School in Media</h1>
          <form>
            <label htmlFor="name">Title: </label>
            <input
              type="text"
              id="title"
              placeholder=""
              className="border-2"
              required
            ></input>
            <br />
            <label htmlFor="name">Author: </label>
            <input
              type="text"
              id="author"
              placeholder=""
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
