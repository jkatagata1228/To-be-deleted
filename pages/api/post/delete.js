import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    let session = await getServerSession(req, res, authOptions);
    const db = (await connectDB).db("forum");
    let findDocument = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.body) });
    if (findDocument.author !== session.user.email) {
      return res.status(400).json("ユーザ情報不一致");
    }
    try {
      await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
      return res.status(200).json("DELETE");
    } catch (error) {
      return res.status(500).json("sever error");
    }
  }
};

export default handler;
