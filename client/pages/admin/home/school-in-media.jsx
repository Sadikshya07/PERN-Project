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
          <h1>Metrics</h1>
          <form>
            <label htmlFor="name">Students: </label>
            <input
              type="text"
              id="students"
              placeholder=""
              className="border-2"
              required
            ></input>
            <br />
            <label htmlFor="name">Students Per Class: </label>
            <input
              type="text"
              id="perclass"
              placeholder=""
              className="border-2"
              required
            ></input>
            <br />
            <label htmlFor="name">Teachers: </label>
            <input
              type="text"
              id="teachers"
              placeholder=""
              className="border-2"
              required
            ></input>
            <br />
            <label htmlFor="name">Student-Teacher Ratio: </label>
            <input
              type="text"
              id="stratio"
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
