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
    | "heavyShowers";
}

const WeatherIcon = ({ weatherCondition }: WeatherIconProps) => {
  switch (weatherCondition) {
    case "sunny":
      return <FaSun />;
    case "cloudy":
      return <FaCloud />;
    case "rainy":
      return <FaCloudRain />;
    case "cloudSun":
      return <FaCloudSun />;
    case "cloudSunRain":
      return <FaCloudSunRain />;
    case "heavyShowers":
      return <FaCloudShowersHeavy />;
    default:
      return <FaSun />;
  }
};

export default WeatherIcon;
