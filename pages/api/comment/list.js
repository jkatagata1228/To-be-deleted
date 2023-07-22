import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("comment")
    .find({ parent: new ObjectId(req.query._id) })
    .toArray();
  res.status(200).json(result);
};

export default handler;
