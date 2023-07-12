import { WeatherModel } from "@/model";
import dbConnect from "@/utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === "GET") {
    const data = await WeatherModel.find({}).limit(10).lean();
    res.status(200).json(data);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
