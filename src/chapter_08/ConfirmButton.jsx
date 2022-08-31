import React, {useState} from "react";

function ConfirmButton(props) {

  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleConfirm = () => {
    //setIsConfirmed(prevIsConfirmed => !prevIsConfirmed);
    setIsConfirmed(!isConfirmed);
  }

  return (
    <button onclick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? '확인됨':'확인하가기'}
    </button>
  );
}

export default ConfirmButton;