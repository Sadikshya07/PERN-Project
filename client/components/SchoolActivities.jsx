import Slider from "react-slick";
import HomeSliderCard from "./HomeSliderCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { SchoolContext } from "./context/SchoolContext";

const SchoolActivities = () => {
  const { schoolActivites } = useContext(SchoolContext);
  let silidesToShowValue;
  if (schoolActivites && schoolActivites.length <= 4) {
    silidesToShowValue = schoolActivites.lenght;
  } else {
    silidesToShowValue = 4;
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: silidesToShowValue,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: schoolActivites && schoolActivites.length > 3 ? 3 : schoolActivites.length,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="school-activities mt-2 bg-gray py-8">
      <div className="school-activities-content w-10/12 md:w-11/12 mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          {console.log(schoolActivites && schoolActivites.length)}
          School Activities
        </h1>
        <Slider {...settings}>
          {schoolActivites &&
            schoolActivites.map((activity) => {
              return <HomeSliderCard key={activity.id} src={activity.Link} />;
            })}
        </Slider>
      </div>
    </div>
  );
};

export default SchoolActivities;
