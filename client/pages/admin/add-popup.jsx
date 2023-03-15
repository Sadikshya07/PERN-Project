import Head from "next/head";
import { useRef } from "react";
import AdminLayout from "../../components/Layouts/AdminLayout";
import PopUpFinder from "../api/PopUpFinder";

export default function AddPopup() {
  const imageRef = useRef();
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
  return (
    <div>
      <Head>
        <title>Admin | Add Popup</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AdminLayout>
        {console.log(process.env.NEXT_PUBLIC_SERVER_HOST)}
        <form onSubmit={handleSubmit}>
          <label htmlFor="image">Popup Image:</label>
          <input
            type="file"
            id="image"
            ref={imageRef}
            placeholder="choose file"
            className="border-2"
          ></input>
          <br />
          <button type="submit" className="border-2">
            Submit
          </button>
        </form>
      </AdminLayout>
    </div>
  );
}
