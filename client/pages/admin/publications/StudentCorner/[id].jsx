import Head from "next/head";
import StudentCornerFinder from "../../../api/StudentCornerFinder";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../../../components/Layouts/AdminLayout";
import Popup from "reactjs-popup";

export default function StudentCorner() {
  const router = useRouter();
  const { id } = router.query;
  const [StudentName, setStudentName] = useState();
  const [Rollno, setRollno] = useState();
  const [Grade, setGrade] = useState();
  const [ArticleTitle, setArticleTitle] = useState();
  const [ArticleContent, setArticleContent] = useState();
  const imageRef = useRef();
  const [image, setImage]=useState();
  const [error, setError] = useState("");
  let i = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StudentCornerFinder.get(`/${id}`);
        setStudentName(response.data.data.item.studentname);
        setRollno(response.data.data.item.rollnumber);
        setGrade(response.data.data.item.grade);
        setArticleContent(response.data.data.item.articlecontent);
        setArticleTitle(response.data.data.articletitle);
        setImage(response.data.data.item.image);
      } catch (err) {
        console.log(err);
      }
    };
    if(id) fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
      const response = await StudentCornerFinder.put(
        `/${id}`,
        {
          StudentName,
          Rollno,
          Grade,
          ArticleTitle,
          ArticleContent,
          image: imageRef.current.files[0],
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      router.push(`/admin/publications/studentcorner`);
    };
  return (
    <div>
      <Head>
        <title>Update Student Corner</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
            <form
              onSubmit={handleSubmit}
              className="w-[44rem] mx-auto px-6 py-12 rounded-xl"
            >
              <label for="name" className="text-lg font-medium w-[11em]">
                Student Name:
              </label>
              <input
                type="text"
                id="fname"
                placeholder=""
                className="border-2 w-full p-2 rounded-lg mb-4"
                required
                onChange={(e) => setStudentName(e.target.value)}
              />
              <br />
              <label for="grade" className="text-lg font-medium w-[11em]">
                Grade:
              </label>
              <input
                type="text"
                id="grade"
                placeholder=""
                className="border-2 w-full p-2 rounded-lg mb-4"
                required
                onChange={(e) => setGrade(e.target.value)}
              ></input>{" "}
              <br />
              <label for="rollno" className="text-lg font-medium w-[11em]">
                Roll Number:
              </label>
              <input
                type="number"
                id="rollno"
                placeholder=""
                className="border-2 w-full p-2 rounded-lg mb-4"
                required
                onChange={(e) => setRollno(e.target.value)}
              ></input>{" "}
              <br />
              <label for="title" className="text-lg font-medium w-[11em]">
                Article Title
              </label>
              <input
                type="text"
                id="title"
                placeholder=""
                className="border-2 w-full p-2 rounded-lg mb-4"
                required
                onChange={(e) => setArticleTitle(e.target.value)}
              ></input>
              <br />
              <label for="Article" className="text-lg font-medium w-[11em]">
                Article Content
              </label>
              <textarea
                type="text"
                id="Article"
                placeholder=""
                className="border-2 w-full p-2 rounded-lg mb-4 h-[8em]"
                required
                onChange={(e) => setArticleContent(e.target.value)}
              ></textarea>
              <br />
              <label for="image" className="text-lg font-medium w-[11em]">
                Image:
              </label>
              <input
                type="file"
                id="image"
                placeholder=""
                ref={imageRef}
                className="border-2 w-full p-2 rounded-lg mb-4"
              ></input>{" "}
              <br />
              <button
                type="submit"
                className="w-full bg-orange hover:bg-[#cb5c1c] text-white text-xl font-bold py-4 rounded-xl"
              >
                Submit{" "}
              </button>
            </form>
      </AdminLayout>
    </div>
  );
}
