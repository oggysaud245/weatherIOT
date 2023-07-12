import { prop } from "@typegoose/typegoose";

export class Predicated {
  @prop()
  title!: string;

  @prop()
  description!: string;
}
