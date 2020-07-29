import { Document, Schema, Model, model } from "mongoose";
import { IBicicleta } from "../interfaces";

export interface BicicletaModel extends IBicicleta, Document {}

const BicicletaSchema = new Schema(
  {
    marca: String,
    status: String,
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
    },
  },
);

export const Bicicleta: Model<BicicletaModel> = model<BicicletaModel>(
  "Bicicleta",
  BicicletaSchema
);
