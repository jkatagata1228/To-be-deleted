import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const Edit = async (props) => {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params._id) });

  return (
    <div className="p-20">
      <h4>Edit</h4>
      <form action="/api/post/edit" method="POST">
        <input
          name="_id"
          defaultValue={result._id.toString()}
          style={{ display: "none" }}
        />
        <input name="title" defaultValue={result.title}></input>
        <input name="content" defaultValue={result.content}></input>
        <button type="submit">修正</button>
      </form>
    </div>
  );
};

export default Edit;
