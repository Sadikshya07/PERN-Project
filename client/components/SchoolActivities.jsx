import Slider from "react-slick";
import HomeSliderCard from "./HomeSliderCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SchoolActivities = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
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
      <div className="school-activities-content w-11/12 mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">School Activities</h1>
        <Slider {...settings}>
          <HomeSliderCard src={"https://www.youtube.com/embed/_YGI1qRd9pw"} />
          <HomeSliderCard src={"https://www.youtube.com/embed/_YGI1qRd9pw"} />
          <HomeSliderCard src={"https://www.youtube.com/embed/_YGI1qRd9pw"} />
          <HomeSliderCard src={"https://www.youtube.com/embed/_YGI1qRd9pw"} />
          <HomeSliderCard src={"https://www.youtube.com/embed/_YGI1qRd9pw"} />
          <HomeSliderCard src={"https://www.youtube.com/embed/_YGI1qRd9pw"} />
          <HomeSliderCard src={"https://www.youtube.com/embed/_YGI1qRd9pw"} />
          <HomeSliderCard src={"https://www.youtube.com/embed/_YGI1qRd9pw"} />
          <HomeSliderCard src={"https://www.youtube.com/embed/_YGI1qRd9pw"} />
          <HomeSliderCard src={"https://www.youtube.com/embed/_YGI1qRd9pw"} />
          <HomeSliderCard src={"https://www.youtube.com/embed/_YGI1qRd9pw"} />
          <HomeSliderCard src={"https://www.youtube.com/embed/_YGI1qRd9pw"} />
        </Slider>
      </div>
    </div>
  );
};

export default SchoolActivities;
