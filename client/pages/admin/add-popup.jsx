import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../components/Layouts/AdminLayout";
import PopUpFinder from "../api/PopUpFinder";
import Popup from "reactjs-popup";

export default function AddPopup() {
  const router = useRouter();
  const imageRef = useRef();
  const [image, setImage] = useState();
  const [PopUp, setPopUp] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PopUpFinder.get("/");
        console.log(response.data.data);
        setPopUp(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await PopUpFinder.post(
        "/",
        {
          image: imageRef.current.files[0],
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await PopUpFinder.delete(`/${id}`);
      setPopUp(
        PopUp.filter((popup) => {
          return popup.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdate = (id) => {
    router.push(`/admin/Add-popup/${id}`);
  };
  return (
    <div>
      <Head>
        <title>Admin | Add Popup</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AdminLayout>
        <h1 className="text-orange text-2xl text-center font-bold m-10">
          Popup
        </h1>
        <Popup
          trigger={<button className="add-data-button">Add Data</button>}
          modal
        >
          {(close) => (
            <form
              onSubmit={handleSubmit}
              className="w-[40rem] mx-auto px-6 py-12 rounded-xl"
            >
              <label htmlFor="image" className="text-lg font-medium w-[10em]">
                Popup Image:
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
          )}
        </Popup>
        <table className="table-style">
          <thead>
            <tr>
              <th className="table-header">Image</th>
              <th className="table-header" colSpan="2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {PopUp &&
              PopUp.map((popup) => {
                return (
                  <tr key={popup.id} className="border-b-2">
                    <td className="table-data">{popup.Image}</td>
                    <td className="actions">
                      <Link href="/admin/Add-popup/`${id}`">
                        <button
                          onClick={() => handleUpdate(popup.id)}
                          className="update"
                        >
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(popup.id)}
                        className="delete"
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
