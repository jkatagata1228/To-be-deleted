"use client";

import { useEffect, useState } from "react";

const Comment = (props) => {
  const [comment, setComment] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/comment/list?_id=${props._id}`)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, [props._id]);

  const handleCommentSubmit = () => {
    fetch("/api/comment/new", {
      method: "POST",
      body: JSON.stringify({ comment: comment, _id: props._id }),
    })
      .then((r) => r.json())
      .then((result) => {
        setComment("");
        fetch(`/api/comment/list?_id=${props._id}`)
          .then((r) => r.json())
          .then((newData) => {
            setData(newData);
          });
      });
  };

  return (
    <div>
      <hr></hr>
      {data.length > 0
        ? data.map((a, i) => (
            <div key={i}>
              <p>
                {a.author} : {a.content}
              </p>
            </div>
          ))
        : "Loading..."}
      <div className="comment">
        <input
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></input>
      </div>
      <button onClick={handleCommentSubmit}>コメント作成</button>
    </div>
  );
};

export default Comment;
