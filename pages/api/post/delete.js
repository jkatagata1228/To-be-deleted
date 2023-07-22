import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let session = await getServerSession(req, res, authOptions);
    const db = (await connectDB).db("forum");
    let findDocument = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.body) });
    if (findDocument.author == session.user.email) {
      try {
        await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
        res.status(200).json("DELETE");
      } catch (error) {
        return res.status(500).json("sever error");
      }
    } else {
      return 응답.status(500).json("あなたは誰ですか？");
    }
  }
};

export default handler;
