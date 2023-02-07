const SchoolInMediaCard = ({}) => {
  return (
      <div className="main-container">
        <div
          className="School-in-Media text-white w-[22rem]  h-[24rem] bg-no-repeat bg-center bg-cover flex flex-col justify-end p-3 items-start"
          style={{
            backgroundImage: ` linear-gradient(0deg, #000000 0%, rgba(217, 217, 217, 0) 107.42%)  ,url("https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg")`,
          }}
        >
          <p className=" font-bold text-2xl">
            TROPICAL SECRETS: HOLOCAUST REFUGEES IN CUBA
          </p>
          <p className="font-medium text-base mt-2">-Snigdha Chaudhary</p>
        </div>
      </div>
  );
};

export default SchoolInMediaCard;


