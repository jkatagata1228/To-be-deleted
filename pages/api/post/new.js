import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

const handler = async (req, res) => {
  let session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user.email;
  }
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(400).json("input title");
    }
    if (req.body.content == "") {
      return res.status(400).json("input content");
    }
    try {
      const db = (await connectDB).db("forum");
      let result = await db.collection("post").insertOne(req.body);
      return res.redirect(302, "/list");
    } catch (error) {
      return res.status(500).json("sever error");
    }
  }
};

export default handler;
