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
    router.push("/admin/home/homepage-images");
  };

  return (
    <div>
      <Head>
        <title>Admin | HomeImage</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div>
          <form onSubmit={handleSubmit}>
            <label for="image1">Image 1:</label>
            <input
              type="file"
              id="image1"
              ref={image1Ref}
              placeholder="choose file"
              className="border-2"
            ></input>
            <br />
            <label for="image2">Image 2:</label>
            <input
              type="file"
              id="image2"
              ref={image2Ref}
              placeholder="choose file"
              className="border-2"
            ></input>
            <br />
            <label for="image3">Image 3:</label>
            <input
              type="file"
              id="image3"
              placeholder="choose file"
              ref={image3Ref}
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
