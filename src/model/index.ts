import { Predicated } from "./Predicted";
import { Weather } from "./Weather";
import { getModelForClass } from "@typegoose/typegoose";

export const WeatherModel = getModelForClass(Weather);

export const PredicatedModel = getModelForClass(Predicated);
