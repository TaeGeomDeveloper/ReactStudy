import React, { useEffect, useState } from "react";

function NameForm(props) {
  const [value, setValue] = useState('');
  const [gender, setGender] = useState("men");

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  }

  const handleSubmit = (event) => {
    alert("이름 : "+value+" 성별 : "+gender);
    event.preventDefault();
  }

  useEffect(() => {
      console.log("did update "+gender);
  });

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Name :
          <input type="Text" name="name" value={value} onChange={handleChange}/> <br/>
          성별 :  
          <select gender={gender} onChange={handleChangeGender}>
            <option gender="men">남자</option>
            <option gender="women">여자</option>
        </select>
        </label>
        <button type="submit">Submit</button>
      </form>
  );
}

export default NameForm;
