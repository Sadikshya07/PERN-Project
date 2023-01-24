import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Deerwalker() {
  return (
    <div>
      <Head>
        <title>Deerwalker</title>
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
      <th>Image</th>
      <th>Actions</th>
      </tr>
      </thead>
      </table>
      <form>
        <h1>Deerwalker</h1>
      <label htmlFor= "name"> Name:</label> <br/>
      <input type="text" id= "name" placeholder="Name" className="border-2"></input><br/>
      <label for = "file">File:</label>
      <input type="file" id= "file" placeholder="choose file" className="border-2"></input> <br/>
      <button type="submit"className="border-2">Submit</button>
      </form>
    </div>
  );
}
