import React from "react";
import commonData from "./SomeCommonData.json";
import "./MultipleMapThrough.css";
import "./ExtraServiceCard.css";
import "./FlegIconCard.css";
import { RecommendedItemsCard } from "./RecommendedItemsCard";
import ExtraServiceCard from "./ExtraServiceCard";

import FlegIconCard from "./FlegIconCard";

export function MultipleMapThrough({ cardInfo }) {
  const SomeCommonData = commonData;
  const selectCard = cardInfo;

  return (
    <div className="menurecommended-grids-container">
      <h2>
        {cardInfo === "recommendedItems"
          ? "Recommended items"
          : cardInfo === "extraServices"
          ? "Our extra services"
          : "Suppliers by region"}
      </h2>
      <div
        className={
          cardInfo === "recommendedItems"
            ? "recommended-grid"
            : cardInfo === "extraServices"
            ? "extraservice-grid "
            : "region-grid"
        }
      >
        {selectCard === "recommendedItems" &&
          SomeCommonData.recommendedItems.map((product, index) => (
            <RecommendedItemsCard product={product} key={index} />
          ))}
        {selectCard === "extraServices" &&
          SomeCommonData.extraServices.map((product, index) => (
            <ExtraServiceCard product={product} key={index} />
          ))}
        {selectCard === "flegIcons" &&
          SomeCommonData.flegIcons.map((product, index) => (
            <FlegIconCard product={product} key={index} />
          ))}
      </div>
    </div>
  );
}
