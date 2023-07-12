import { prop } from "@typegoose/typegoose";

export class Predicated {
  @prop()
  humidity!: string;

  @prop()
  pressure!: string;

  @prop()
  temperature!: string;
}
