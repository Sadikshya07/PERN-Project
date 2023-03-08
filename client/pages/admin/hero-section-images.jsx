import Head from "next/head";
import Link from "next/link";
import AdminLayout from "../../components/Layouts/AdminLayout";

export default function HeroSectionImages() {
  return (
    <div>
      <Head>
        <title>Add Hero Section Images</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <h1>Add Hero Section Images</h1>
        <div className="main-container">
          <form>
            <label htmlFor="pagenames">Page: </label>
            <select id="pagenames">
              <option>Choose Page</option>
              <option>Management</option>
              <option>Faculty</option>
              <option>Why DSS?</option>
              <option>DSS Courses</option>
              <option>Weekend Camp Program</option>
              <option>Courses</option>
              <option>Alumni</option>
              <option>News & Events</option>
              <option>Newsletter</option>
              <option>Term Summary</option>
              <option>The Deerwalker</option>
              <option>Student Corner</option>
              <option>Analysis Report</option>
              <option>Podcast</option>
              <option>DSS Clubs</option>
              <option>Admission</option>
            </select>
            <br />
            <label for="file">File:</label>
            <input
              type="file"
              id="file"
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
