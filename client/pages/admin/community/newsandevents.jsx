import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NewsandEventsFinder from "../../api/NewsandEventsFinder";
import { useState } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import {useRouter} from "next/router"

export default function NewsAndEvents() {
  const router = useRouter();
  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [publishdate, setDate] = useState();
  const [newsandevents, setNewsandEvents] = useState();
  const [error, setError] = useState("");
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await NewsandEventsFinder.post(
        "/",
        {
          author,
          title,
          image1,
          image2,
          description,
          publishdate,
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
    try{
      const response = await NewsandEventsFinder.delete(`/${id}`);
      setNewsandEvents(
        newsandevents.filter((news) => {
          return news.id !== id;
        })
      );
    }catch (err){
      console.log(err);
    }

  };
  
  const handleUpdate = (id) => {
    router.push(``);
  };
  return (
    <div>
      <Head>
        <title>Admin | News and Events</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <button className="border-2">Add</button>
        <br />
        <table>
          <thead>
            <tr>
              <th>AuthorName</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
             {newsandevents &&
              newsandevents.map((news) => {
              return (
            <tr key={news.id} >
            <td>author={news.author}</td>
            <td>title={news.title}</td>
            <td>description={news.description}</td>
            <td>publishdate={news.publishdate}</td>
            <td>
              <Link href="">
                <button
                onClick = {() => handleUpdate(news.id)}
                className="border-2">Update</button>
              </Link>
            </td>
            <td>
              <button
              onClick = {() => handleDelete(news.id)}
              className="border-2">Delete</button>
            </td>
            </tr>
              );
             })
           }
           </tbody>
        </table>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label htmlFor="fname">Full name:</label> <br />
          <input
            type="text"
            id="fname"
            placeholder="Name"
            className="border-2"
            required
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
          <br />
          <label for="description">Description:</label> <br />
          <input
            type="text"
            id="description"
            placeholder="description"
            className="border-2"
            required
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <br />
          <label for="Title">Title:</label> <br />
          <input
            type="text"
            id="Title"
            placeholder="Title"
            className="border-2"
            required
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <br />
          <label for="Date">Date:</label> <br />
          <input
            type="date"
            id="Date"
            placeholder="date"
            className="border-2"
            required
            onChange={(e) => setDate(new Date(e.target.value))}
          ></input>
          <br />
          <label for="image">Image 1:</label> <br />
          <input
            type="file"
            id="image"
            placeholder="Choose a file"
            className="border-2"
            onChange={(e) => {
              setImage1(e.target.files[0]);
            }}
            required
          ></input>
          <br />
          <label for="image">Image 2:</label> <br />
          <input
            type="file"
            id="image"
            placeholder="Choose a file"
            className="border-2"
            onChange={(e) => {
              setImage2(e.target.files[0]);
            }}
            required
          ></input>
          <br />
          <button type="submit" className="border-2">
            Submit
          </button>
        </form>
      </AdminLayout>
    </div>
  );
}
