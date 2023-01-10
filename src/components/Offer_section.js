//! This component is used to display the cards in the offer section

// Component
import Card from "./Card";

// Card data dynamic
import { card_data } from "../data/card_data";

const Offer_section = () => {
  return (
    <div className="p-[2rem_7rem] space-y-[4rem]">
      <h3 className="text-center">What We Offer</h3>
      {/* Data is fetched dynamically from the card data */}
      <div className="flex items-center space-x-5">
        {card_data().map((card) => {
          return (
            <Card
              key={card.heading}
              image={process.env.PUBLIC_URL + card.image}
              heading={card.heading}
              text={card.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Offer_section;
