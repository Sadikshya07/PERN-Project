import Head from "next/head";
import { useRef } from "react";
import { useState,useEffect } from "react";
import {useRouter} from "next/router";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import PopUpFinder from "../../api/PopUpFinder";

export default function AddPopup() {
  const router = useRouter();
  const { id } = router.query;
  const imageRef = useRef();
  const [image,setImage] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PopUpFinder.get(`/${id}`);
        console.log(response.data.data);
        setImage(response.data.data.popup.image);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
      const response = await PopUpFinder.put(
        `/${id}`,
        {
          image: imageRef.current.files[0],
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    router.push(`/admin/add-popup`);
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
