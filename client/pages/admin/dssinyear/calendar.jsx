import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Calendar() {
  return (
    <div>
      <Head>
        <title>Calendar</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button className="border-2">Add</button><br/>
      <table>
        <thead>
      <tr>
      <th>SN</th>
      <th>Name</th>
      <th>Actions</th>
      </tr>
      </thead>
      </table>
      <h1>Calendar</h1>
      <label htmlFor= "title">Title:</label> <br/>
      <input type="text" id= "title" placeholder="Title" className="border-2"></input><br/>
      <label for = "file">File:</label> <br/>
      <input type="file" id= "file" placeholder="Choose file" className="border-2"></input> <br/>

    </div>
  );
}
