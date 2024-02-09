import React from "react";

import axios from "axios";

import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp} ° `);
  }
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}` ;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="blue"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
