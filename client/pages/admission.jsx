import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AiFillInfoCircle } from "react-icons/ai";

export default function Admission() {
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        {/* hero section here */}
        <h4>
          Prospective parents are advised to know about the admission process
          through Open House Sessions (OHS).
        </h4>
        <div className="open-house">
          <h2>DSS Open House</h2>
          <p>
            Through DSS Open House sessions, we share various aspects of
            studying at DSS with prospective students and parents. These
            interactive sessions normally last for an hour, and we aim to help
            the prospective students and parents learn about the nature of
            education and services we offer. The sessions are free of cost and
            are hosted by the teachers and admins of DSS.
          </p>
          <div className="when-how-cards">
            <div className="when">
              <div className="top">
                <AiFillInfoCircle />
                <h5>When</h5>
              </div>
              <p>
                We open the admissions generally around <span>March/April</span>{" "}
                of each calendar year.
              </p>
            </div>
            <div className="how">
              <div className="top">
                <AiFillInfoCircle />
                <h5>How</h5>
              </div>
              <p>
                Once you attend our OHS, the <span>application process</span>{" "}
                for the admission of your child at DSS can be done in the steps
                mentioned below.
              </p>
            </div>
          </div>
        </div>
        <div className="submitting-application-form">
          <h2>Submitting the Application Form</h2>
          <p>
            You can submit the Application form, provided at the time of Open
            House Session to DSS front desk between{" "}
            <span>10:00 am to 5:30 pm. (Monday to Friday)</span> with following
            documents:
          </p>
          <ul>
            <li>Two passports sized photos of your child</li>
            <li>Application processing fee payable at DSS accounts</li>
          </ul>
          <p>
            While submitting the form, you have to select the{" "}
            <span>most suitable Deerwalk Aptitude Test (DAT) date</span> for
            your child from the available list of the available dates. After
            submitting the form, you will receive:
          </p>
          <ul>
            <li>Two passports sized photos of your child</li>
            <li>Application processing fee payable at DSS accounts</li>
          </ul>
        </div>
        <div className="dat">
          <h2>Deerwalk Aptitude Test (DAT)</h2>
          <p>
            DAT is a skill based objective test designed to check the level of
            understanding of your child in languages (Nepali/English),
            Mathematics and Science. The test will run for one and a half hours.
            To make sure your child goes comfortable with the DAT, on the test
            date, we recommend you:
          </p>
          <ul>
            <li>
              To be present in the school 30 minute prior to examination with
              your child
            </li>
            <li>To bring the valid admission card provided by the school</li>
          </ul>
          <p>
            You will know about the status of DAT result within two school days
            from our admission department.
          </p>
        </div>
        <div className="parent-teacher-interaction">
          <h5>Parent Teacher Interaction</h5>
          <p>
            After the publication of entrance result, our admission department
            will set your appointment with our professional teachers for the
            parent teacher interaction.
          </p>
        </div>
        <div className="admission-offer-letter">
          <h5>Admission Offer Letter</h5>
          <p>
            You will receive an admission offer letter in the name of your child
            for admittance in DSS. At the time of admission, you have to submit
            a copy of the latest mark sheet from the previous institution along
            with the receipt of the admission/annual fee deposited in the name
            of Deerwalk Sifal School.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
