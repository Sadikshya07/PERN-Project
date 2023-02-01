const HomeSliderCard = ({ src }) => {
  return (
    <div className="school-activities-card  bg-offWhite w-[20em] h-[20em] mx-auto">
      <iframe
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full rounded-xl"
      ></iframe>
    </div>
  );
};

export default HomeSliderCard;
