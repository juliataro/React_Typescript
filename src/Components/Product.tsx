import React, { useState } from "react";
import { IProduct } from "../models";

// Interface based on model enables to connect to @items fields
interface ProductProps {
  item: IProduct;
}

// TODO: Describe item as type - { item }: ProductProps
export function Product({ item }: ProductProps) {
  const [details, setDetails] = useState(false);

  // TODO: If Details are true - then yellow - dynamic data
  const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-400";

  // Styling as array of static and dynamic data by class
  const btnClasses = ["py-2 px-4 mt-3 mb-3 border", btnBgClassName];

  return (
    <div className="border py-2 px-4 mt-2 mb-2 rounded flex flex-col items-center mb-2">
      <img src={item.image} className="w-1/6" alt={item.title} />
      {item.title}

      {/* TODO: Button className changes dynamically dependent on */}
      <p className="font-bold">{item.price}</p>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {/* TODO: IF details is true - hide description -other way show it */}
        {details ? "Hide Details" : "Show Details"}
      </button>

      {/* TODO: IF details is true - show description */}
      {details && (
        <div className="flex flex-col items-center">
          <p>{item.description}</p>
        
          <p>
          Rate: <span style={{ fontWeight: "bold" }}>{item?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}
