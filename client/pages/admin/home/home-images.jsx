import Head from "next/head";
import Link from "next/link";

export default function Images() {
  return (
    <div>
      <Head>
        <title>Add Images</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="form-container">
        <h1>Add Home Images</h1>
        <form>
          <label for="image1">Image 1:</label>
          <input
            type="file"
            id="image1"
            placeholder="choose file"
            className="border-2"
          ></input>
          <br />
          <label for="image2">Image 2:</label>
          <input
            type="file"
            id="image2"
            placeholder="choose file"
            className="border-2"
          ></input>
          <br />
          <label for="image3">Image 3:</label>
          <input
            type="file"
            id="image3"
            placeholder="choose file"
            className="border-2"
          ></input>
          <br />
        </form>
      </div>
    </div>
  );
}
