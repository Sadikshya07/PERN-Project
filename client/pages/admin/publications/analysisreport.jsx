import Head from "next/head";
import AnalysisReportFinder from "../../api/AnalysisReportFinder";
import { useEffect, useState } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";

export default function AnalysisReport() {
  const [name, setName] = useState();
  const [error, setError] = useState("");
  const [analysisReport, setAnalysisReport] = useState();
  let i = 0;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AnalysisReportFinder.get("/");
        setAnalysisReport(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AnalysisReportFinder.post("/", {
        name,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Head>
        <title>Analysis Report</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="main-container">
          <h1 className="text-orange text-2xl text-center font-bold m-10">
            Add Analysis Report
          </h1>
          <button className="border-2">Add</button>
          <br />
          <table>
            <thead>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Image</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {analysisReport &&
                analysisReport.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{i++}</td>
                      <td>{item.name}</td>
                      <td>{item.image}</td>
                      <td>Delete</td>
                      <td>Update</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <form
            onChange={handleSubmit}
            className="border-4 border-orange w-[44rem] mx-auto px-6 py-12 rounded-xl"
          >
            <label htmlFor="name" className="text-lg font-medium w-[11em]"> Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="border-2 w-full p-2 rounded-lg mb-42"
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
            <br />
            <label htmlFor="file" className="text-lg font-medium w-[11em]">File:</label>
            <input
              type="file"
              id="file"
              placeholder="choose file"
              className="border-2 w-full p-2 rounded-lg mb-4"
            ></input>
            <br />
            <button type="submit" className="w-full bg-orange hover:bg-[#cb5c1c] text-white text-xl font-bold py-4 rounded-xl">
              Submit
            </button>
          </form>
        </div>
      </AdminLayout>
    </div>
  );
}
