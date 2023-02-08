import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSectionCard from "../components/HeroSection";
import { AiFillInfoCircle } from "react-icons/ai";

export default function Admission() {
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/src/assets/favicon.svg" />
      </Head>
      <Navbar />
        <HeroSectionCard url="" title={"Admission"} />
      <main>
        <h4 className="font-semibold text-2xl text-center my-[2rem]">
          Prospective parents are advised to know about the admission process
          through <span className="text-green">Open House Sessions (OHS)</span>.
        </h4>
        <div className="open-house bg-gray">
          <div className="open-house-content w-11/12 mx-auto py-10">
            <h2 className="text-3xl text-orange font-bold text-center mb-4">DSS Open House</h2>
            <p className="text-xl font-regular text-center mb-5">
              Through DSS Open House sessions, we share various aspects of
              studying at DSS with prospective students and parents. These
              interactive sessions normally last for an hour, and we aim to help
              the prospective students and parents learn about the nature of
              education and services we offer. The sessions are free of cost and
              are hosted by the teachers and admins of DSS.
            </p>
            <div className="when-how-cards flex justify-evenly">
              <div className="when w-[20em] h-[20em] py-10 flex flex-col items-center px-10 rounded-xl card-shadow">
                <div className="top flex items-center gap-4 text-2xl  text-orange">
                  <AiFillInfoCircle />
                  <h5 className="font-medium">When</h5>
                </div>
                <p className="mt-10 font-medium text-xl">
                  We open the admissions generally around <span className="text-green">March/April   </span>
                  of each calendar year.
                </p>
              </div>
              <div className="how w-[20em] h-[20em] py-10 flex flex-col items-center px-10 rounded-xl card-shadow">
                <div className="top flex items-center gap-4 text-2xl  text-orange">
                  <AiFillInfoCircle />
                  <h5 className="font-medium">How</h5>
                </div>
                <p className="mt-6 font-medium text-xl">
                  Once you attend our OHS, the <span className="text-green">application process </span>
                  for the admission of your child at DSS can be done in the steps
                  mentioned below.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="submitting-application-form">
          <div className="submitting-application-content w-11/12 mx-auto py-10">
            <h2 className="text-3xl text-orange font-bold text-center mb-4">Submitting the Application Form</h2>
            <p className="text-xl font-regular mb-5">
              You can submit the Application form, provided at the time of Open
              House Session to DSS front desk between{" "}
              <span className="text-green">10:00 am to 5:30 pm. (Monday to Friday)</span> with following
              documents:
            </p>
            <div className="list-wrapper ml-[20em]">
              <ul className = "mb-4 list-disc text-lg font-semibold">
                <li>Two passports sized photos of your child</li>
                <li>Application processing fee payable at DSS accounts</li>
              </ul>
            </div>
            <p className="text-xl font-regular mb-5">
              While submitting the form, you have to select the 
              <span className="text-green"> most suitable Deerwalk Aptitude Test (DAT) date</span> for
              your child from the available list of the available dates. After
              submitting the form, you will receive:
            </p>
            <div className="list-wrapper ml-[20em]">
              <ul className = "mb-4 list-disc text-lg font-semibold">
                <li>Admission card with student’s photo</li>
                <li>Receipt for application fees</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="dat bg-gray">
          <div className="dat-content w-11/12 mx-auto py-10">
            <h2 className="text-3xl text-orange font-bold text-center mb-4">Deerwalk Aptitude Test (DAT)</h2>
            <p className="text-xl text-center font-regular mb-5">
              DAT is a skill based objective test designed to check the level of
              understanding of your child in languages (Nepali/English),
              Mathematics and Science. The test will run for one and a half hours.
              To make sure your child goes comfortable with the DAT, on the test
              date, we recommend you:
            </p>
            <div className="list-wrapper ml-[20em]">
              <ul className = "mb-6 list-disc text-lg font-semibold">
                <li>
                  To be present in the school 30 minute prior to examination with your child
                </li>
                <li>To bring the valid admission card provided by the school</li>
              </ul>
            </div>
            <p className="text-xl text-center font-regular mb-5">
              You will know about the status of DAT result within two school days
              from our admission department.
            </p>
          </div>
        </div>
        <div className="parent-teacher-interaction">
          <div className="interaction-container w-11/12 mx-auto py-10">
            <h5 className="text-3xl text-orange font-bold text-center mb-4">Parent Teacher Interaction</h5>
            <p className="text-xl font-regular mb-5">
              After the publication of entrance result, our admission department
              will set your appointment with our professional teachers for the
              parent teacher interaction.
            </p>
          </div>
        </div>
        <div className="admission-offer-letter bg-gray">
          <div className="offer-letter-container w-11/12 mx-auto py-10">
            <h5 className="text-3xl text-orange font-bold text-center mb-4">Admission Offer Letter</h5>
            <p className="text-xl text-center font-regular mb-5">
              You will receive an admission offer letter in the name of your child
              for admittance in DSS. At the time of admission, you have to submit
              a copy of the latest mark sheet from the previous institution along
              with the receipt of the admission/annual fee deposited in the name
              of Deerwalk Sifal School.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
