
import "./Weather.scss";
import WeatherIcon from "./WeatherIcon";

const WeatherContent = () => {
  return (
    <div className="wrapperGrid">
      <div className="wrapperGrid-item">
        <div>Melbourne</div>
        <div>32
            <span>icon</span>
        </div>
        <div>Date</div>
      </div>
      <div className="wrapperGrid-item"><WeatherIcon weatherCondition="cloudSun" /></div>
     <div>
        <div>
         <div className="wrapperGrid-item">Item 4</div>
      <div className="wrapperGrid-item">Item 4</div></div>
      <div> <div className="wrapperGrid-item">Item 4</div>
      <div className="wrapperGrid-item">Item 4</div></div>
      <div><div className="wrapperGrid-item">Item 4</div>
      <div className="wrapperGrid-item">Item 4</div></div>
      <div><div className="wrapperGrid-item">Item 4</div>
      <div className="wrapperGrid-item">Item 4</div></div>
      </div>
    </div>
  );
};

export default WeatherContent;
