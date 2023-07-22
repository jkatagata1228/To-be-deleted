import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(400).json("input title");
    }
    if (req.body.content == "") {
      return res.status(400).json("input content");
    }
    try {
      let newTitle = req.body.title;
      let newContent = req.body.content;
      const db = (await connectDB).db("forum");
      let result = await db
        .collection("post")
        .updateOne(
          { _id: new ObjectId(req.body._id) },
          { $set: { title: newTitle, content: newContent } }
        );
      res.redirect(302, "/list");
    } catch (error) {
      return res.status(500).json("sever error");
    }
  }
};

export default handler;
