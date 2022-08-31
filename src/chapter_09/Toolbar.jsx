import React from "react";

// 스타일 설정
const styles = {
  wrapper : {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid grey",
  },
  greeting: {
    marginRight: 16,
  },
};

function Toolbar(props) {
  // 변수 선언
  const { isLoggedIn, onClickLogin, onClickLogout } = props;

  return(
    <div style={styles.wrapper}>
      {isLoggedIn && <span style={styles.greeting}> 환영 합니다! </span>}

      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>)
        : (
          <button onClick={onClickLogin}>로그인</button>
        )
      }

    </div>
  );
}

export default Toolbar;