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
        <div className="main-container">
          <h1 className="text-orange text-2xl text-center font-bold m-10">
            Add Popup
          </h1>
          {/* {console.log(process.env.NEXT_PUBLIC_SERVER_HOST)} */}
          <form
            onSubmit={handleSubmit}
            className="border-4 border-orange w-[40rem] mx-auto px-6 py-12 rounded-xl"
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
        </div>
      </AdminLayout>
    </div>
  );
}
