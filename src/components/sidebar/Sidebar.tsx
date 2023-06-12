import "./Sidebar.scss";
import Accordion from "../accordion/Accordion";

import DonutChart from "../rampChart/Rampchart";
import RoutesGrid from "../routesGrid/RoutesGrid";

import { mockRoutes } from "../../api/routesData";
import WeatherContent from "../weather/Weather";
// import { weatherData } from "../../api/weatherData";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <WeatherContent />
      <Accordion
        headerTitle="DELAYED ROUTES"
        contentChildren={
          <>
            {mockRoutes.map((route) => (
              <RoutesGrid
                key={route.routeName}
                routeName={route.routeName}
                startingPoint={route.startingPoint}
                endPoint={route.endPoint}
                distance={route.distance}
                delayTime={route.delayTime}
              />
            ))}
          </>
        }
      />
      <Accordion
        headerTitle="RAMP CHART"
        contentChildren={
          <div className="rampChart--centralised">
            <DonutChart />
          </div>
        }
      />
    </div>
  );
};

export default Sidebar;
