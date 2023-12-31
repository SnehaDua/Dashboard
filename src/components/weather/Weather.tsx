import React from "react";
import "./Weather.scss";
import WeatherIcon from "./WeatherIcon";
import CurrentDateTime from "../currentDateTime/CurrentDateTime";
// const currentDate = new Date();
interface IWeatherProps {
  cityName?: string;
  temperature?: number;
  date?: string;
  humidity?: number;
  chanceOfRain?: number;
  wind?: number;
  weatherCondition?: string;
  tomorrowTemp?: number;
}

const WeatherContent: React.FC<IWeatherProps> = ({
  cityName = "Melbourne",
  temperature = 32,
  date= <CurrentDateTime/>,
  // date=currentDate.toLocaleString("en-US", {weekday: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'}),
  humidity = 78,
  chanceOfRain = 34,
  wind = 21,
  weatherCondition = "cloudSun",
  tomorrowTemp = 30,
}) => {
  return (
    <div className="weather">
      <div className="weather__current">
        <div className="weather__current__item">
          <div>{cityName}</div>
          <div className="weather__current__item--bold bright">
            {temperature}&deg;
          </div>
          <div>{date}</div>
        </div>

        <WeatherIcon
          weatherCondition={weatherCondition}
          tempClassName="weather__current__icon bright"
        />
      </div>
      <div className="weather__details">
        <div className="weather__details__item">
          <div>Humidity</div>
          <div>Chance of Rain</div>
          <div>Wind</div>
          <div>Tomorrow</div>
        </div>
        <div className="weather__details__item weather__details__item--bold bright">
          <div>{humidity}%</div>
          <div>{chanceOfRain}%</div>
          <div>{wind} kmh</div>
          <div>
            {tomorrowTemp}&deg;
            <span className="weather__details__item__icon">
              <WeatherIcon weatherCondition="sunny" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherContent;
