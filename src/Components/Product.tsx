import React, { useState } from "react";
import { IProduct } from "../models";

// Interface based on model
interface ProductProps {
  toy: IProduct;
}

export function Product({ toy }: ProductProps) {
  const [details, setDetails] = useState(false);
  const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-400";

  const btnClasses = ["py-2 px-4 mt-3 mb-3 border", btnBgClassName];

  return (
    <div className="border py-2 px-4 mt-2 mb-2 rounded flex flex-col items-center mb-2">
      <img src={toy.image} className="w-1/6" alt={toy.title} />
      {toy.title}

      {/* Button className changes dinamically depandent on */}
      <p className="font-bold">{toy.price}</p>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {/* IF details is true - hide description -other way show it */}
        {details ? "Hide Details" : "Show Details"}
      </button>

      {/* IF details is true - show description */}
      {details && (
        <div className="flex flex-col items-center">
          <p>{toy.description}</p>
          <p>
            Rate: <span style={{ fontWeight: "bold" }}>{toy.rating.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}
