import { Document, Schema, Model, model } from "mongoose";
import { IBicicleta, IUsuario } from "../interfaces";

export interface UsuarioModel extends IUsuario, Document {}

const UsuarioSchema = new Schema(
  {
   nome: String,
   cpf: String
  },
);

export const Usuario: Model<UsuarioModel> = model<UsuarioModel>(
  "Usuario",
  UsuarioSchema
);
