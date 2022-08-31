import React from "react";

// 온도 설정
const scaleNames = {
  C : '섭씨',
  F : '화씨'
};

function TemperatureInput(props) {
 
  // 온도 변경 처리
  const handleChange = (event) => {
    // value 값을 변경 시켜 준다.
    props.onTemperatureChange(event.target.value);
  };

  // 입력 UI 처리.
  return (
    <fieldset>
      <legend>
        온도를 입력해주세요 (단위 : {scaleNames[props.scale]}) : 
      </legend>
        <input  value={props.temperature} onChange={handleChange} />
    </fieldset>
  );

}

export default TemperatureInput;