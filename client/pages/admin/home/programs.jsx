import Head from "next/head";
import Link from "next/link";
import AdminLayout from "../../../components/Layouts/AdminLayout";

export default function Programs() {
  return (
    <div>
      <Head>
        <title>Add Programs</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="form-container">
          <h1>Add Programs</h1>
          <form>
            <label for="image1">Elementary School:</label>
            <input
              type="file"
              id="elementaryschool"
              placeholder="choose file"
              className="border-2"
            ></input>
            <br />
            <label for="image2">Middle School:</label>
            <input
              type="file"
              id="middleschool"
              placeholder="choose file"
              className="border-2"
            ></input>
            <br />
            <label for="image3">High School:</label>
            <input
              type="file"
              id="highschool"
              placeholder="choose file"
              className="border-2"
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
