import Head from "next/head";
import AnalysisReportFinder from "../../../api/AnalysisReportFinder";
import { useEffect, useState ,useRef } from "react";
import {useRouter} from "next/router";
import AdminLayout from "../../../../components/Layouts/AdminLayout";
import Popup from "reactjs-popup";

export default function UpdateAnalysisReport() {
  const router = useRouter();
  const { id } = router.query;
  const imageRef = useRef();
  const fileRef = useRef();
  const [name, setName] = useState();
  const [image, setImage]=useState();
  const [file,setFile] = useState();
  const [error, setError] = useState("");
  const [analysisReport, setAnalysisReport] = useState();
  let i = 0;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AnalysisReportFinder.get(`/${id}`);
        console.log(response.data.data);
        setName(response.data.data.item.name);
        setImage(response.data.data.item.image);
        setFile(response.data.data.item.file)
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchData();
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
      const response = await AnalysisReportFinder.put(
        `/${id}`, {
        name,
        image: imageRef.current.files[0],
        file: fileRef.current.files[0],
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      });
      router.push(`/admin/publications/analysisreport`);
  };

  return (
    <div>
      <Head>
        <title>Update Analysis Report</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <h1 className="text-orange text-2xl text-center font-bold m-10">
          Update Analysis Report
        </h1>
            <form
              onSubmit={handleSubmit}
              className="w-[44rem] mx-auto px-6 py-12 rounded-xl"
            >
              <label htmlFor="name" className="text-lg font-medium w-[11em]">
                {" "}
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="border-2 w-full p-2 rounded-lg mb-42"
                required
                onChange={(e) => setName(e.target.value)}
              ></input>
              <br />
              <label htmlFor="file" className="text-lg font-medium w-[11em]">
                File:
              </label>
              <input
                type="file"
                id="file"
                ref={fileRef}
                placeholder="choose file"
                className="border-2 w-full p-2 rounded-lg mb-4"
              ></input>
              <br />
              <label htmlFor="image" className="text-lg font-medium w-[10em]">
                Image:
              </label>
              <input
                type="file"
                id="image"
                ref={imageRef}
                placeholder="choose file"
                className="border-2 w-full p-2 rounded-lg mb-4"
              ></input>
              <br />
              <button
                type="submit"
                className="w-full bg-orange hover:bg-[#cb5c1c] text-white text-xl font-bold py-4 rounded-xl"
              >
                Submit
              </button>
            </form>
      </AdminLayout>
    </div>
  );
}
