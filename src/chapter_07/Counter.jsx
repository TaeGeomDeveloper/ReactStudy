import React, { useEffect, useState } from "react";


const styles = {
  Text: {
    color : "darkgreen",
    fontSize : "40px",
  },
  Button: {
    height : "40px",
    width: "100px",
    fontSize : "20px",
  }
};

function Counter(props) {
  const [count,setCount] = useState(0);
  const [cnt,setCnt] = useState(0);

  useEffect(()=>{
    setCount(count + 1);
    console.log(count);
    return (()=> {
        console.log("unmount");
    });
  },[cnt]);

  return (
    <div>
      <p style={styles.Text}> 총 {count} 번 클릭했습니다. </p>
      <button style={styles.Button} onClick={() => {
        setCnt(cnt+1);
        //setCount(count + 1);
      }}>클릭</button>
    </div>
  );
}

export default Counter;