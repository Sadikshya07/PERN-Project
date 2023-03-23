import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FacultyFinder from "../../api/FacultyFinder";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function UpdateFaculty() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [department, setDepartment] = useState();
  const [AreaofExpertise, setAreaofExpertise] = useState();
  const [Experience, setExperience] = useState();
  const [image, setImage] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FacultyFinder.get(`/${id}`);
        console.log(response.data.data);
        setName(response.data.data.person.name);
        setDescription(response.data.data.person.description);
        setDepartment(response.data.data.person.department);
        setAreaofExpertise(response.data.data.person.AreaofExpertise);
        setExperience(response.data.data.person.experience);
        setImage(response.data.data.person.image);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await FacultyFinder.put(`/${id}`, {
      name,
      description,
      department,
      AreaofExpertise,
      image,
      Experience
    });
    router.push("/admin/aboutus/faculty");
  };

  return (
    <div>
      <Head>
        <title>Admin | Update-Faculty</title>
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
            <label for="department">Department:</label> <br />
          <input
            type="text"
            id="Department"
            placeholder="department"
            className="border-2"
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
          <br />
          <label for="department">Area Of Expertise:</label> <br />
          <input
            type="text"
            id="areaOfExperties"
            placeholder="Area of Expertise"
            className="border-2"
            onChange={(e) => setAreaofExpertise(e.target.value)}
            required
          />
          <br />
          <label for="areaOfExperties">Experience:</label> <br />
          <input
            type="text"
            id="experience"
            placeholder="Experience"
            className="border-2"
            onChange={(e) => setExperience(e.target.value)}
            required
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
