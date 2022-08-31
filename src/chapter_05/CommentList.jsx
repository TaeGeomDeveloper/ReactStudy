import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name : "홍길동", comment: "안녕",
  },
  {
    name : "유재석", comment: "안녕하세요",
  },
  {
    name : "지석진", comment: "왕코",
  }
];

function CommentList(props) {
  return (
    <div>
      {comments.map((item) => {
        return(
          <Comment name = {item.name} comment={item.comment}/>
        );
      })}
    </div>
  );
}

export default CommentList;