// This is the Hero section of the home page
const Hero_section = () => {
  return (
    <div className="flex items-center justify-between p-[0_7rem] h-screen space-x-3">
      {/* Left section */}
      <div className="flex-[1.1] flex flex-col space-y-8">
        <h1>
          Hone your english speaking skills over
          <span className="text-[#139980]"> one-on-one </span>
          video call
        </h1>
        <h4 className="">
          Practice english conversation with excellent communuicators <br/>across the
          country and speak like a PRO 😎.
        </h4>
        {/* Buttons */}
        <div className="flex space-x-[3rem]">
          <button className="bg-[#FF736A] text-white font-medium p-[1rem_1rem] rounded-full w-[10rem]">Book a trial</button>
          <button className="text-[#FF736A] border-[2.5px] border-[#FF736A] font-medium p-[0.8rem_1rem] rounded-full w-[15rem]">Download our app</button>
        </div>
      </div>
      {/* Right section */}
      <div className="flex-[0.9] h-[20rem] border-2 border-black rounded-lg"></div>
    </div>
  );
};

export default Hero_section;
