import { PredicatedModel } from "@/model";
import dbConnect from "@/utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";
interface CreateTodoBody {
  title: string;
  description: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === "POST") {
    const body = req.body as CreateTodoBody;
    const todo = new PredicatedModel({
      title: body.title,
      description: body.description,
    });
    await todo.save();

    res.status(200).json(todo.toJSON());
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
