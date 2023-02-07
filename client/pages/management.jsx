import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ManagementCard from "../components/ManagementCard";
import HeroSectionCard from "../components/HeroSection";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import HomeLayout from "../components/Layouts/HomeLayout";
import ManagementFinder from "./api/ManagementFinder";

export default function Management() {
  // Use effect to change when we recieve the data
  const [data, setData] = useState();
  const managementCards =
    data && // this so that it only happens when the data is fetched
    data.map((person) => {
      return (
        <ManagementCard
          key={person.id}
          name={person.name}
          description={person.description}
          position={person.position}
        />
      );
    });
  useEffect(() => {
    // use effect to fetch the data when the page loads
    const fetchData = async () => {
      // async beacuse it takes time to get the data from the server
      try {
        const response = await ManagementFinder.get("/"); //this is to get the data from the server using axios (axios is used insted of fetch() function)
        // console.log(response.data.data);
        setData(response.data.data); //set the received responses data to  to data variable at above
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <HeroSectionCard url="" title="Management" />
        {data ? (
          <div className="management-grid-container flex justify-around">
            {managementCards}
          </div>
        ) : (
          <Spinner />
        )}
      </HomeLayout>
    </>
  );
}
