import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

const handler = async (req, res) => {
  let session = await getServerSession(req, res, authOptions);
  if (req.method == "POST") {
    req.body = JSON.parse(req.body);
    let saveComment = {
      content: req.body.comment,
      parent: new ObjectId(req.body._id),
      author: session.user.email,
    };
    let db = (await connectDB).db("forum");
    await db.collection("comment").insertOne(saveComment);
    res.status(200).json("作成完了");
  }
};
export default handler;
