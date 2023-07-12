import { prop } from "@typegoose/typegoose";

export class Weather {
  @prop()
  humidity!: string;

  @prop()
  pressure!: string;

  @prop()
  temperature!: string;
}
