import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Management() {
  return (
    <div>
      <Head>
        <title>Management</title>
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
      <th>Description</th>
      <th>Actions</th>
      </tr>
      </thead>
      </table>
      <form>
      <label htmlFor= "fname">Full name:</label> <br/>
      <input type="text" id= "fname" placeholder="Name" className="border-2"></input><br/>
      <label for = "description">Description:</label> <br/>
      <input type="text" id= "description" placeholder="description" className="border-2"></input> <br/>
      <button type="submit"className="border-2">Submit</button>
      </form>
    </div>
  
  );
}
