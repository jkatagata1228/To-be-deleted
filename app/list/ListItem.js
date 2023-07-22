"use client";

import Link from "next/link";

const ListItem = (props) => {
  return (
    <div className="list-div">
      {props.result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link prefetch={false} href={`detail/${a._id}`}>
              <h4>{a.title}</h4>
            </Link>
            <button className="edit-link-btn">
              <Link href={`edit/${a._id}`}>
                <p>修正</p>
              </Link>
            </button>
            <button
              className="listDelete-btn"
              onClick={(e) => {
                fetch("/api/post/delete", {
                  method: "POST",
                  body: a._id,
                }).then(() => {
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = "none";
                  }, 1000);
                });
              }}
            >
              削除
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ListItem;
