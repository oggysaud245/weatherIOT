import { prop } from "@typegoose/typegoose";

export class Weather {
  @prop()
  title!: string;

  @prop()
  description!: string;
}
