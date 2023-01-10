//! This component is used to show how it works section on the home page

const Work = () => {
  return (
    <div className="space-y-7  p-[2rem_7rem_0rem]">
      <h3>How it works?</h3>
      {/* Left Side */}
      <div className="flex justify-evenly">
        <div className="flex flex-col space-y-10 items-center">
          <div className="p-4 h-[10rem] w-[23rem] shadow-xl rounded-lg flex flex-col items-start justify-center">
            <h4>1. Create Account</h4>
            <p className="text-[1rem] text-[#808F93]">
              Create your account using phone number or email and take a free
              trial at ₹1.
            </p>
          </div>
          <div className="p-4 h-[10rem] w-[23rem] shadow-xl rounded-lg flex flex-col items-start justify-center">
            <h4>3. Select time slot</h4>
            <p className="text-[1rem] text-[#808F93]">
              Subscribe & select any time slot between 10 AM to 12 midnight.
            </p>
          </div>
        </div>
        {/* image div */}
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/Subscribe & plans 1.png"}
            alt="Subscribe page"
            className="h-[25rem] w-[15rem]"
          />
          <div className="bg-gradient-to-b from-[#ffffff7b] to-[#fff] h-[8rem] w-[15rem] relative -top-[8rem]"></div>
        </div>
        {/* Right side */}
        <div className="flex flex-col space-y-10 items-center">
          <div className="p-4 h-[10rem] w-[23rem] shadow-xl rounded-lg flex flex-col items-start justify-center">
            <h4>2. Subscribe</h4>
            <p className="text-[1rem] text-[#808F93]">
              Choose your preferred duration and select subscription package for
              your sessions.
            </p>
          </div>
          <div className="p-4 h-[10rem] w-[23rem] shadow-xl rounded-lg flex flex-col items-start justify-center">
            <h4>4. You are done</h4>
            <p className="text-[1rem] text-[#808F93]">
              That’s it! Start practicing and reach your learning goal in
              speaking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
