import React, { useState, useEffect } from "react";
import { FaLongArrowAltDown, FaCircle } from "react-icons/fa";
import "./RoutesGrid.scss";

interface RoutesGridProps {
  routeName?: string;
  startingPoint?: string;
  endPoint?: string;
  distance?: number;
  delayTime?: number;
}

const RoutesGrid = ({
  routeName,
  startingPoint,
  endPoint,
  distance,
  delayTime,
}: RoutesGridProps) => {
  const [delayType, setDelayType] = useState<"high" | "low">("low");

  useEffect(() => {
    if (delayTime && delayTime > 25) {
      setDelayType("high");
    } else {
      setDelayType("low");
    }
  }, [delayTime]);

  return (
    <div className="routesOuterGrid">
      <div className="routesInnerGrid smallerText">
        <div className={`circleIcon-${delayType}`} data-testid="delay-circle">
          <FaCircle />
        </div>
        <div className="largerText bright">{routeName}</div>
        <div className="distance">{distance} km</div>
      </div>
      <div className="routesInnerGrid smallerText">
        <div className="arrowIcon">
          <FaLongArrowAltDown />
        </div>
        <div className="routePoints">
          <div>{startingPoint}</div>
          <div>{endPoint}</div>
        </div>
        <div className="delay bright">
          <span className="largerText ">{delayTime} </span> mins
        </div>
      </div>
    </div>
  );
};

export default RoutesGrid;
