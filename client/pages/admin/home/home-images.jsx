import Head from "next/head";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import HomeImageFinder from "../../api/HomeImageFinder";
import { useRouter } from "next/router";

export default function Images() {
  const router = useRouter();
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();
  const [heroImage, setHeroImage] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HomeImageFinder.get("/");
        console.log(response.data.data);
        setHeroImage(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await HomeImageFinder.post(
        "/",
        {
          image1: image1Ref.current.files[0],
          image2: image2Ref.current.files[0],
          image3: image3Ref.current.files[0],
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
      const response = await HomeImageFinder.delete(`/${id}`);
      setHeroImage(
        heroImage.filter((heroImage) => {
          return heroImage.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (id) => {
    router.push(`/admin/home/Home-images/${id}`);
  };

  return (
    <div>
      <Head>
        <title>Add Homepage Images</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <table>
          <thead>
            <tr>
              <th>SN</th>
              <th>Image1</th>
              <th>Image2</th>
              <th>Image3</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {heroImage &&
              heroImage.map((heroImage) => {
                return (
                  <tr key={heroImage.id}>
                    <td>image1={heroImage.image1}</td>
                    <td>image2={heroImage.image2}</td>
                    <td>image3={heroImage.image3}</td>
                    <td>
                      <Link href="/admin/home/Home-images/`${id}`">
                        <button
                          onClick={() => handleUpdate(heroImage.id)}
                          className="border-2"
                        >
                          Update
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(heroImage.id)}
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
        <div className="form-container">
          <h1 className="text-orange text-2xl text-center font-bold m-10">
            Add Homepage Images
          </h1>
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
