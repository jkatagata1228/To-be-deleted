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
            <button
              className="edit-link-btn"
              onClick={(e) => {
                fetch("/api/post/edit", {
                  method: "POST",
                }).then((res) => {
                  if (res.status !== 200) {
                    alert("ユーザ情報不一致");
                  }
                });
              }}
            >
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
                }).then((res) => {
                  if (res.status == 200) {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  } else {
                    alert("ユーザ情報不一致");
                  }
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
