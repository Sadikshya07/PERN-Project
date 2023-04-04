import Head from "next/head";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import ProgramsFinder from "../../api/ProgramsFinder";
import { useRouter } from "next/router";
import Popup from "reactjs-popup";

export default function Programs() {
  const router = useRouter();
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();
  const [programs, setPrograms] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProgramsFinder.get("/");
        console.log(response.data.data);
        setPrograms(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ProgramsFinder.post(
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
      const response = await ProgramsFinder.delete(`/${id}`);
      setPrograms(
        programs.filter((programs) => {
          return programs.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (id) => {
    router.push(`/admin/home/Programs/${id}`);
  };

  return (
    <div>
      <Head>
        <title>Admin | Add Programs</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="form-container">
          <h1 className="text-orange text-2xl text-center font-bold m-10">
            Programs Images
          </h1>
          <Popup
            trigger={<button className="add-data-button">Add Data</button>}
            modal
          >
            {(close) => (
              <form
                onSubmit={handleSubmit}
                className="w-[44rem] mx-auto px-6 py-12 rounded-xl"
              >
                <label for="image1" className="text-lg font-medium w-[10em]">
                  Elementary School:
                </label>
                <input
                  type="file"
                  id="elementaryschool"
                  ref={image1Ref}
                  placeholder="choose file"
                  onChange={(e) => setImage1(e.target.files[0])}
                  required
                  className="border-2 w-full p-2 rounded-lg mb-4"
                ></input>
                <br />
                <label for="image2" className="text-lg font-medium w-[10em]">
                  Middle School:
                </label>
                <input
                  type="file"
                  id="middleschool"
                  ref={image2Ref}
                  placeholder="choose file"
                  onChange={(e) => setImage2(e.target.files[0])}
                  required
                  className="border-2 w-full p-2 rounded-lg mb-4"
                ></input>
                <br />
                <label for="image3" className="text-lg font-medium w-[10em]">
                  High School:
                </label>
                <input
                  type="file"
                  id="highschool"
                  ref={image3Ref}
                  placeholder="choose file"
                  onChange={(e) => setImage3(e.target.files[0])}
                  required
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
            )}
          </Popup>
          <table>
            <thead>
              <tr>
                <th>Image1</th>
                <th>Image2</th>
                <th>Image3</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {programs &&
                programs.map((programs) => {
                  return (
                    <tr key={programs.id}>
                      <td>{programs.elementryImage}</td>
                      <td>{programs.middleImage}</td>
                      <td>{programs.higherImage}</td>
                      <td>
                        <Link href="/admin/home/Programs/`${id}`">
                          <button
                            onClick={() => handleUpdate(programs.id)}
                            className="border-2"
                          >
                            Update
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(programs.id)}
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
        </div>
      </AdminLayout>
    </div>
  );
}
