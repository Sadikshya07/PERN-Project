import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FacultyFinder from "../../api/FacultyFinder";
import { useState, useEffect } from "react";

export default function Faculty() {
  const [name, setName] = useState();
  const [faculty, setFaculty] = useState();
  const [description, setDescription] = useState();
  const [department, setDepartment] = useState();
  const [AreaofExpertise, setAreaofExpertise] = useState();
  const [Experience, setExperience] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FacultyFinder.get("/");
        console.log(response.data.data);
        setFaculty(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await FacultyFinder.post("/", {
        name,
        description,
        department,
        AreaofExpertise,
        Experience,
      });
      faculty(response.data.data)
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try{
      const response = await FacultyFinder.delete(`/${id}`)
      setFaculty(faculty.filter(person => {
        return person.id !== id 
      })
        );
    }
    catch (err){
        console.log(err);
    }
  }

  return (
    <div>
      <Head>
        <title>Faculty</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button className="border-2">Add</button>
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Department</th>
            <th>Image</th>
            <th>Area of Expertise</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>      
        </thead>
        <tbody>
          {faculty && 
          faculty.map((person) => {
          return (
          <tr key={person.id} >
          <td>name={person.name}</td>
          <td>description={person.description}</td>
          <td>department={person.department}</td>
          <td>AreaofExpertise={person.AreaofExpertise}</td>
          <td>Experience={person.Experience}</td>
          <td>
            <button className="border-2">Update</button>
          </td>
          <td>
            <button 
            onclick={() => handleDelete(person.id)}
            className="border-2">Delete</button>
          </td>
          </tr>
           );
          })
          }
        </tbody>   
      </table>
      <form onSubmit={handleSubmit}>
        <label forhtml="fname">Full name:</label> <br />
        <input
          type="text"
          id="fname"
          placeholder="Name"
          className="border-2"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label forhtml="description">Description:</label> <br />
        <input
          type="text"
          id="description"
          placeholder="description"
          className="border-2"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <label forhtml="department">Department:</label> <br />
        <input
          type="text"
          id="department"
          placeholder="department"
          className="border-2"
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        <br />
        <label forhtml="AreaofExpertise">Area of Expertise:</label> <br />
        <input
          type="text"
          id="Areaofexpertise"
          placeholder="AreaofExpertise"
          className="border-2"
          onChange={(e) => setAreaofExpertise(e.target.value)}
          required
        />
        <br />
        <label forhtml="Experience">Experience:</label> <br />
        <input
          type="text"
          id="Experience"
          placeholder="Experience"
          className="border-2"
          onChange={(e) => setExperience(e.target.value)}
          required
        />
        <br />
        <label forhtml="image">Image:</label> <br />
        <input
          type="file"
          id="image"
          placeholder="Choose a file"
          className="border-2"
        />
        <br />
        <button type="submit" className="border-2">
          Submit
        </button>
      </form>
    </div>
  );
}
