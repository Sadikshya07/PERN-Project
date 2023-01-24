import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Booklist() {
  return (
    <div>
      <Head>
        <title>Booklist</title>
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
      <form>
        <h1>Booklist</h1>
      <label htmlFor= "fname">Full name:</label> <br/>
      <input type="text" id= "fname" placeholder="Name" className="border-2"></input><br/>
      <label for = "file">File:</label>
      <input type="file" id= "file" placeholder="choose file" className="border-2"></input> <br/>
      <button type="submit"className="border-2">Submit</button>
      </form>
    </div>
  );
}
