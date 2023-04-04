import Head from "next/head";
import Link from "next/link";
import TermSummaryFinder from "../../api/TermSummaryFinder";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import Popup from "reactjs-popup";

export default function TermSummary() {
  const router = useRouter();
  const [name, setName] = useState();
  const imageRef = useRef();
  const fileRef = useRef();
  const [error, setError] = useState("");
  const [termSummary, setTermSummary] = useState();
  let i = 0;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TermSummaryFinder.get("/");
        setTermSummary(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await TermSummaryFinder.post(
        "/",
        {
          name,
          image: imageRef.current.files[0],
          file: fileRef.current.files[0],
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await TermSummaryFinder.delete(`/${id}`);
      console.log(response);
      setTermSummary(
        termSummary.filter((item) => {
          return item.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdate = (id) => {
    router.push(`/admin/publications/TermSummary/${id}`);
  };

  return (
    <div>
      <Head>
        <title>Term Summary</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <h1 className="text-orange text-2xl text-center font-bold m-10">
          Term Summary
        </h1>
        <Popup
          trigger={<button className="add-data-button">Add Data</button>}
          modal
        >
          {(close) => (
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
              <button
                type="submit"
                className="w-full bg-orange hover:bg-[#cb5c1c] text-white text-xl font-bold py-4 rounded-xl"
              >
                Submit
              </button>
            </form>
          )}
        </Popup>
        <table className="table-style">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>File</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {termSummary &&
              termSummary.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.image}</td>
                    <td>{item.file}</td>
                    <td>
                      <Link href="/admin/publications/TermSummary/`${id}`">
                        <button
                          onClick={() => handleUpdate(item.id)}
                          className="border-2"
                        >
                          Update
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="border-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </AdminLayout>
    </div>
  );
}
