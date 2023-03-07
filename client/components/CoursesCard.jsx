import {FaExternalLinkAlt} from "react-icons/fa";

export default function CoursesCard({url, title}) {
  return (
    <a href="/" target="_blank" rel = "noopener noreferrer">
      <div className="dss-courses-card p-3 card-shadow-medium w-11/12 h-[6em] rounded-xl my-5 ">
        <div className="card-info p-4 h-full flex justify-between items-center">
          <p className="md:text-xl font-semibold">{title}</p>
          <FaExternalLinkAlt className="text-xl text-orange"/>
        </div>
      </div>
    </a>
  );
}
