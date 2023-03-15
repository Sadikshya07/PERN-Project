const SchoolInMediaCard = ({ link, image, title, author }) => {
  return (
    <a href={link} target="_blank">
      <div className="main-container">
        <div
          className="School-in-Media text-white w-[22rem]  h-[24rem] bg-no-repeat bg-center bg-cover flex flex-col justify-end p-3 items-start"
          style={{
            backgroundImage: `linear-gradient(0deg, #000000 0%, rgba(217, 217, 217, 0) 107.42%)  ,url('${process.env.NEXT_PUBLIC_SERVER_HOST}${image}')`,
          }}
        >
          <p className=" font-bold text-2xl">{title}</p>
          <p className="font-medium text-base mt-2">{`-${author}`}</p>
        </div>
      </div>
    </a>
  );
};

export default SchoolInMediaCard;
