"use client";

import { useEffect, useState } from "react";

const Comment = (props) => {
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/comment/list?_id=${props._id}`)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div>
      <hr></hr>
      {data.length > 0
        ? data.map((a, i) => {
            return <p key={i}>{a.content}</p>;
          })
        : "Loading..."}
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: props._id }),
          });
        }}
      >
        push
      </button>
    </div>
  );
};
export default Comment;
