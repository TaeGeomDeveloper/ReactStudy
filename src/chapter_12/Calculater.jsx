import React, { useState } from "react";
// import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

// 섭씨 온도 100도 이상이면 물의 끓는다고 출력
function BoilingVerdict(props) {
  if(props.celsius>= 100){
    return <p>물이 끓습니다.</p>
  }
  return <p> 물이 끊지 않습니다.</p>

}

// 화씨를 섭씨로 변경해준다.
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32)*5)/9;
}
// 섭씨를 화씨로 변경해준다.
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 온도 값과 변환할 함수를 받아서 리턴해준다.
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if(Number.isNaN(input)) { return"";
  }

  const output = convert(input);
  const rounded = Math.round(output* 1000)/ 1000;

  // 화씨는 섭씨로 변경, 섭씨는 화씨로 변경.
  return rounded.toString();
}

function Calculator(props) {
  // 온도 설정과 온도를 상태 받아서 선언해준다.
  const [temperature,setTemprature] = useState("");
  const [scale, setScale] = useState("C");

  // 온도와 설정값을 업데이트 처리해준다.
  const handleCelsiusChange = (temperature) => { 
    setTemprature(temperature);
    setScale("C");
  };
  const handleFahrenheitChange = (temperature) => {
    setTemprature(temperature);
    setScale("F");
  };

  // 온도 설정이 다르면 변경.
  const celsius = scale === "F" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === "C" ? tryConvert(temperature,toFahrenheit) : temperature;

  // 출력 처리 부분.
  return (
    <div>
      <TemperatureInput
        scale="C"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="F"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)}/>
    </div>
  );
}

export default Calculator;