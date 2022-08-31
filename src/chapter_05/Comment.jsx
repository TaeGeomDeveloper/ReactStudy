import React from "react";

const styles = {
  wrapper: {
      margin: 8,
      padding: 8,
      display: "flex",
      flexDirection: "row",
      border: "1px solid grey",
      borderRadius: 16,
    },
    imageContainer: {},
    image: {
      width:50,
      height : 50,
      borderRadius: 25,
    },
    ContentContainer: {
      marginLeft: 8,
      display: "flex",
      flexDirection: "column",
      justyifyContent: "center",
    },
    nameText: {
      color: "blakc",
      fontSize: 16,
      fontWeight: "bold",
    },
    commentText: {
      color: "blakc",
      fontSize: 16,
    },
  };

function Comment(props) {
  return (
    <div style = {styles.wrapper}>
      <div>
      <img src="logo192.png" alt="logo" style = {styles.image}/>
      </div>
      <div style={styles.ContentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;