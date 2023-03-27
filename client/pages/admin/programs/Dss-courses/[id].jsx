import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DssCoursesFinder from "../../../api/DssCoursesFinder";
import AdminLayout from "../../../../components/Layouts/AdminLayout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function UpdateDssCourses() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DssCoursesFinder.get(`/${id}`);
        console.log(response.Courses.data);
        setName(response.data.data.Courses.name);
        setDescription(response.data.data.Courses.description);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await DssCoursesFinder.put(`/${id}`, {
      name,
      description,
    });
    router.push(`/admin/programs/dsscourses`);
  };

  return (
    <div>
      <Head>
        <title>Admin | Update-DssCourses</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname" className="block">
              Full name:
            </label>
            <input
              type="text"
              id="fname"
              placeholder="Full name:"
              className="border-2"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="description" className="block">
              Description:
            </label>
            <input
              type="text"
              id="description"
              placeholder="Description"
              className="border-2"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
           <br/>
            <div className="m-3">
              <button type="submit" className="border-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </AdminLayout>
    </div>
  );
}
