import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ManagementFinder from "../../api/ManagementFinder";
import { useState } from "react";

export default function Management() {
  // useState is used to change the variable when user types in the values (to check what is going on use console.log(name or description or position ))
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [position, setPosition] = useState();
  // error is used to display the error but it is not completed
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    // <-- this function is used to submit the data to backend
    e.preventDefault(); //<-- here e.preventDefault is used so that the page doesnot reload since it is the deafult behaviour of form submission
    try {
      const response = await ManagementFinder.post("/", {
        //<-- this is to submit the data. Since data is posted in post request here. The API can be found in the API folder
        name,
        description,
        position,
      });
    } catch (err) {
      console.log(err);
      // setError(err.data.data);
    }
  };
  return (
    <div>
      <Head>
        <title>Management</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container w-11/12 mx-auto my-3 py-3">
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
        {/* this is to just to call the functino handleSubmit when the form is submitted  */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname" className="block">
            Full name:
          </label>
          <input
            type="text"
            id="fname"
            placeholder="Name"
            className="border-2"
            required
            // Since the name or description or position needs to be sent to backend we can change their values using onChnage handler of form. setName is used from useState .
            //  e.target.value is taking the value from the input box. And the same is done for all the following data that needs to be sent
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="description" className="block">
            Description:
          </label>
          <textarea
            type="text"
            id="description"
            placeholder="description"
            className="border-2"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label htmlFor="description" className="block">
            Position:
          </label>
          <input
            type="text"
            id="description"
            placeholder="description"
            className="border-2"
            onChange={(e) => setPosition(e.target.value)}
            required
          />
          <div className="m-3">
            <button type="submit" className="border-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
