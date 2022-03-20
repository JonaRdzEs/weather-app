import { useSelector, useDispatch } from "react-redux";
import TodaysHightlights from "components/TodaysHightlights/TodaysHightlights";
import IconButton from "components/common/IconButton";
import Attribution from "components/common/Attributtion";
import WeatherCard from "./WeatherCard";
import { setMode } from "redux/reducers/appModeReducer";
import { others, dkm_btn_container, next_days_weather_container, unit_text, active_mode } from "assets/styles/WeatherNextDays.module.scss";
import { setCurrentWeather } from "redux/reducers/weatherReducer";
import CelsiusIcon from "components/common/CeslsiusIcon";
import FahrenheitIcon from "components/common/FahrenheitIcon";

function WeatherNextDays() {

  const dispatch = useDispatch();
  const nextDaysInfo = useSelector((state) => state.myWeatherReducer.nextDaysWeather);
  const currentMode = useSelector((state) => state.myModeReducer.currentMode);
 
  const toCelsius = () => {
    localStorage.mode = "c";
    dispatch(setMode("c"))
    /* dispatch(setCurrentWeather()) */
  }

  const toFahrenheit = () => {
    localStorage.mode = "f";
    dispatch(setMode("f"))
  }

  return (
    <div className={others}>
      <div className={dkm_btn_container}>
        <IconButton handleClick={toCelsius} cssClass={currentMode === "c" ? active_mode : ""}>
            <CelsiusIcon isActive={currentMode === "c" ? true : false}/>
        </IconButton>
        <IconButton handleClick={toFahrenheit} cssClass={currentMode === "f" ? active_mode : ""}>
            <FahrenheitIcon isActive={currentMode === "f" ? true : false}/>
        </IconButton>
      </div>
      <div className={next_days_weather_container}>
        {nextDaysInfo.map((day) =>  (
            <WeatherCard
              key={day.valid_date}
              date={day.valid_date}
              max={day.max_temp.toFixed()}
              min={day.min_temp.toFixed()}
              imgCode={day.weather.code}
            />
          )
        )}
      </div>
      <TodaysHightlights />
      <Attribution />
    </div>
  );
}

export default WeatherNextDays;