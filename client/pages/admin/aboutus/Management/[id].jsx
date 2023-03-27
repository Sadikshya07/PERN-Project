import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ManagementFinder from "../../../api/ManagementFinder";
import AdminLayout from "../../../../components/Layouts/AdminLayout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function UpdateManagement() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [position, setPosition] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ManagementFinder.get(`/${id}`);
        console.log(response.data.data);
        setName(response.data.data.person.name);
        setDescription(response.data.data.person.description);
        setPosition(response.data.data.person.position);
        setImage(response.data.data.person.image);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await ManagementFinder.put(`/${id}`, {
      name,
      description,
      position,
      image,
    });
    router.push(`/admin/aboutus/management`);
  };

  return (
    <div>
      <Head>
        <title>Admin | Management</title>
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
            <br />
            <label htmlFor="position" className="block">
              Position:
            </label>
            <input
              type="text"
              id="position"
              placeholder="Position"
              className="border-2"
              required
              onChange={(e) => setPosition(e.target.value)}
            />
            <br />
            <label htmlFor="image">Image:</label> <br />
            <input
              type="file"
              id="image"
              placeholder="Choose a file"
              className="border-2"
              required
              onChange={(e) => setImage(e.target.value)}
            />
            <br />
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
