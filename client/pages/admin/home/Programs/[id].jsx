import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProgramsFinder from "../../../api/ProgramsFinder";
import AdminLayout from "../../../../components/Layouts/AdminLayout";
import { useRouter } from "next/router";
import {useRef, useState, useEffect } from "react";

export default function UpdatePrograms() {
  const router = useRouter();
  const { id } = router.query;
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();
  const [image1 , setImage1] = useState();
  const [image2 , setImage2] = useState();
  const [image3 , setImage3] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProgramsFinder.get(`/${id}`);
        console.log(response.data.data);
        setImage1(response.data.data.programs.image1);
        setImage2(response.data.data.programs.image2);
        setImage3(response.data.data.programs.image3);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await  ProgramsFinder.put(`/${id}`, {
        image1: image1Ref.current.files[0],
        image2: image2Ref.current.files[0],
        image3: image3Ref.current.files[0],
    });
    router.push(`/admin/home/programs`);
  };

  return (
    <div>
      <Head>
        <title>Admin | Update-Programs</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div>
        <form onSubmit={handleSubmit}>
            <label for="image1">Elementary School:</label>
            <input
              type="file"
              id="elementaryschool"
              ref={image1Ref}
              placeholder="choose file"
              className="border-2"
              onChange={(e) => setImage1(e.target.files[0])}
              required
            ></input>
            <br />
            <label for="image2">Middle School:</label>
            <input
              type="file"
              id="middleschool"
              ref={image2Ref}
              placeholder="choose file"
              className="border-2"
              onChange={(e) => setImage2(e.target.files[0])}
              required
            ></input>
            <br />
            <label for="image3">High School:</label>
            <input
              type="file"
              id="highschool"
              ref={image3Ref}
              placeholder="choose file"
              className="border-2"
              onChange={(e) => setImage3(e.target.files[0])}
              required
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
