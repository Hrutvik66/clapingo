// This is a card component that is used in the home page What we offer section
const Card = ({ image, heading, text }) => {
  return (
    <div className="w-[25rem] h-[25rem] rounded-lg">
      {/* Image */}
      <img src={image} alt={heading} className="relative h-[20rem] w-full  rounded-lg" />
      {/* Text */}
      <div className="relative z-40 -top-[7.8rem] text-left bg-[#00000040] backdrop-blur-lg px-10 py-3 h-[8rem]  rounded-b-lg">
        <h4 className="text-[#00D2FF]">{heading}</h4>
        <p className="text-white text-[1rem]">{text}</p>
      </div>
    </div>
  );
};

export default Card;
