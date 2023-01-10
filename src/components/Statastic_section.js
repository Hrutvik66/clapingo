//! Description: This component is used to show the statistic section in the home page

const Statastic_section = () => {
  return (
    <div className="flex justify-between pr-[7rem] pb-[4rem]">
      {/* Left side */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-[#00d2ff] to-[#00d2ff00] via-[#00d2ff00] space-y-7 p-[6rem_7rem_6rem_5rem]">
        <div className="flex items-center space-x-8">
          <div className="flex flex-col items-center space-y-1 bg-[#3A3636] text-white p-[0.5rem_0rem] w-[13rem] rounded-md">
            <h3>50K<span className="text-[#52A49A] text-smibold">+</span></h3>
            <p>Mobile Downloads</p>
          </div>
          <div className="flex flex-col items-center space-y-1 bg-[#3A3636] text-white p-[0.5rem_0rem] w-[13rem] rounded-md">
            <h3>80K<span className="text-[#52A49A] text-smibold">+</span></h3>
            <p>Happy Learners</p>
          </div>
        </div>
        <div className="flex items-center space-x-8 ml-[4rem]">
          <div className="flex flex-col items-center space-y-1 bg-[#3A3636] text-white p-[0.5rem_0rem] w-[13rem] rounded-md">
            <h3>53K<span className="text-[#52A49A] text-smibold">+</span></h3>
            <p>Sessions per month</p>
          </div>
          <div className="flex flex-col items-center space-y-1 bg-[#3A3636] text-white p-[0.5rem_0rem] w-[13rem] rounded-md">
            <h3>200K<span className="text-[#52A49A] text-smibold">+</span></h3>
            <p>Speakers around the globe</p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1 py-1 space-y-5">
        <p className="text-[#139980] font-medium text-[1.2rem]">Book a trial</p>
        <h2>Start your English<br/> speaking journey today!</h2>
        <p className="w-[23rem] text-[1rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
          pellentesque praesent vitae sit sagittis venenatis.
        </p>
        <button className="bg-[#FF736A] text-white font-medium p-[1rem_1rem] rounded-full w-[10rem] hover:bg-white hover:text-black hover:border-[2.5px] border-[#FF736A] transition-all duration-700 ease-in-out">Book a trial</button>
      </div>
    </div>
  );
};

export default Statastic_section;
