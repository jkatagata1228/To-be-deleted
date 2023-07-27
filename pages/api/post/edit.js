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
      .findOne({ _id: new ObjectId(req.body._id) });
    if (findDocument.author !== session.user.email) {
      return res.status(400).json("ユーザ情報不一致");
    }
    // if (findDocument.author == session.user.email) {
    if (req.body.title == "") {
      return res.status(400).json("input title");
    }
    if (req.body.content == "") {
      return res.status(400).json("input content");
    }
    try {
      let newTitle = req.body.title;
      let newContent = req.body.content;
      await db
        .collection("post")
        .updateOne(
          { _id: new ObjectId(req.body._id) },
          { $set: { title: newTitle, content: newContent } }
        );
      return res.status(200).json("修正完了");
    } catch (error) {
      return res.status(500).json("sever error");
    }
  }
};
// };

export default handler;
