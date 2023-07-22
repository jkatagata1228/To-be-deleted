import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

const Detail = async (props) => {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params._id) });

  return (
    <div className="detail-container">
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment _id={result._id}></Comment>
    </div>
  );
};

export default Detail;
