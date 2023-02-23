import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import WhyDssFinder from "../../api/WhyDssFinder";
import { useState } from "react";

export default function WhyDSS() {
  const [Category, setCategory] = useState();
  const [Bullets, setBullets] = useState();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await WhyDssFinder.post("/",{
        Category,
        Bullets,
      });
    }
    catch(err){
      console.log(err);
    }
  };
  
  return (
    <div>
      <Head>
        <title>Why DSS</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button className="border-2">Add</button>
      <br />
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Category</th>
            <th>Bullets</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
      <form onChange={handleSubmit}>
        <label for="category">Category:</label> <br />
        <input
          type="text"
          id="category"
          placeholder="Category"
          className="border-2"
          required
          onChange={(e) => setCategory(e.target.value)}
        ></input>
        <br />
        <label for="Bullets">Bullets:</label> <br />
        <input
          type="text"
          id="Bullets"
          placeholder="Bullet"
          className="border-2"
          required
          onChange={(e) => set(e.target.value)}
        ></input>
        <br />
        <button type="submit" className="border-2">
          Submit
        </button>
      </form>
    </div>
  );
}
