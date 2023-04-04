import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SchoolActivitiesFinder from "../../../api/SchoolActivitiesFinder";
import AdminLayout from "../../../../components/Layouts/AdminLayout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function UpdateSchoolActivities() {
  const router = useRouter();
  const { id } = router.query;
  const [Link, setLink] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SchoolActivitiesFinder.get(`/${id}`);
        console.log(response.data.data);
        setLink(response.data.data.schoolActivities.Link);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
      const response = await SchoolActivitiesFinder.put(
        `/${id}`,
        {
          Link,
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      router.push(`/admin/home/school-activities`);
  };

  return (
    <div>
      <Head>
        <title>Admin | Update-SchoolActivities</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name"> URL:</label>
            <input
              type="text"
              id="url"
              placeholder="URL"
              className="border-2"
              onChange={(e) => {
                setLink(e.target.value);
              }}
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
