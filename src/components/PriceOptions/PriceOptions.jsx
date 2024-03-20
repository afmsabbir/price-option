import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const gymPricingOptions = [
    {
      id: "1",
      name: "Basic Membership",
      features: [
        "Access to gym facilities during off-peak hours",
        "Limited access to group fitness classes",
        "Use of basic gym equipment",
        "Access to locker rooms and showers",
      ],
      price: "$30/month",
    },
    {
      id: "2",
      name: "Standard Membership",
      features: [
        "24/7 access to gym facilities",
        "Access to all group fitness classes",
        "Use of advanced gym equipment",
        "Access to sauna and steam room",
        "Access to locker rooms and showers",
      ],
      price: "$50/month",
    },
    {
      id: "3",
      name: "Premium Membership",
      features: [
        "24/7 access to gym facilities",
        "Unlimited access to all group fitness classes",
        "Use of advanced gym equipment",
        "Access to sauna and steam room",
        "Personal training sessions (2 sessions/month)",
        "Access to locker rooms and showers",
        "Nutritional consultation",
      ],
      price: "$80/month",
    },
  ];
  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Price in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {gymPricingOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
