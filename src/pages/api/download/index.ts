"use strict";
import fs from "fs";
import path from "path";
import fastCsv from "fast-csv";
import { WeatherModel } from "@/model";
import dbConnect from "@/utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";
import { createObjectCsvWriter } from "csv-writer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === "GET") {
    try {
      const data = JSON.parse(JSON.stringify(await WeatherModel.find()));
      if (data.length === 0) {
        res.json({ statusCode: "404", message: "No Data Found" });
      }
      const header = Object.keys(data[0]);
      const csvWriter = createObjectCsvWriter({
        path: `./public/${new Date()}.csv`,
        header: header.map((key) => ({ id: key, title: key })),
      });

      await csvWriter.writeRecords(data);
      res.json({ statusCode: "200", message: "File Ready" });
    } catch (error) {
      res.json({ statusCode: "500", message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
