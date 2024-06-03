// http://localhost:3000/api/getblog?slug=how-to-learn-react.js
import * as fs from "fs";

export default async function handler(req, res) {
  const { slug } = req.query;
  try {
    const data = await fs.promises.readFile(`./blogdata/${slug}.json`, "utf-8");
    res.status(200).json(JSON.parse(data));
  } catch (err) {
    // console.log("error encountered", err);
    res.status(500).json({ error: "No such blog found" });
  }
}
