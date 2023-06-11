import {
  FaSun,
  FaCloud,
  FaCloudRain,
  FaCloudSun,
  FaCloudSunRain,
  FaCloudShowersHeavy,
} from "react-icons/fa";

interface WeatherIconProps {
  weatherCondition:
    | "sunny"
    | "cloudy"
    | "rainy"
    | "cloudSun"
    | "cloudSunRain"
    | "heavyShowers"
    | string;
  tempClassName?: string;
}

const WeatherIcon = ({ weatherCondition, tempClassName }: WeatherIconProps) => {
  switch (weatherCondition) {
    case "sunny":
      return <FaSun className={tempClassName} />;
    case "cloudy":
      return <FaCloud className={tempClassName} />;
    case "rainy":
      return <FaCloudRain className={tempClassName} />;
    case "cloudSun":
      return <FaCloudSun className={tempClassName} />;
    case "cloudSunRain":
      return <FaCloudSunRain className={tempClassName} />;
    case "heavyShowers":
      return <FaCloudShowersHeavy className={tempClassName} />;
    default:
      return <FaSun />;
  }
};

export default WeatherIcon;
