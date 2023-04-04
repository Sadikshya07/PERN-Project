import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HomeImageFinder from "../../../api/HomeImageFinder";
import AdminLayout from "../../../../components/Layouts/AdminLayout";
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";

export default function UpdateHomeImages() {
  const router = useRouter();
  const { id } = router.query;
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HomeImageFinder.get(`/${id}`);
        console.log(response.data.data);
        setImage1(response.data.data.heroImage.image1);
        setImage2(response.data.data.heroImage.image2);
        setImage3(response.data.data.heroImage.image3);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await HomeImageFinder.put(
      `/${id}`,
      {
        image1: image1Ref.current.files[0],
        image2: image2Ref.current.files[0],
        image3: image3Ref.current.files[0],
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    router.push("/admin/home/home-images");
  };

  return (
    <div>
      <Head>
        <title>Admin | Homepage Images</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <h1 className="text-orange text-2xl text-center font-bold m-10">
          Update Homepage Images
        </h1>
        <div>
        <form
              onSubmit={handleSubmit}
              className="border-4 border-orange w-[44rem] mx-auto px-6 py-12 rounded-xl"
            >
              <label for="image1" className="text-lg font-medium w-[5em]">
                Image 1:
              </label>
              <input
                type="file"
                id="image1"
                ref={image1Ref}
                placeholder="choose file"
                className="border-2 w-full p-2 rounded-lg mb-4"
              ></input>
              <br />
              <label for="image2" className="text-lg font-medium w-[5em]">
                Image 2:
              </label>
              <input
                type="file"
                id="image2"
                ref={image2Ref}
                placeholder="choose file"
                className="border-2 w-full p-2 rounded-lg mb-4"
              ></input>
              <br />
              <label for="image3" className="text-lg font-medium w-[5em]">
                Image 3:
              </label>
              <input
                type="file"
                id="image3"
                placeholder="choose file"
                ref={image3Ref}
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
