import { Request, Response } from "express";
import { Usuario } from "../schemas/Usuario";

class UsuarioService {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const usuarios = await Usuario.find();

      return res.json(usuarios);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const usuario = await Usuario.findById(req.params.id);

      return res.json(usuario);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      let usuario = await Usuario.create(req.body);

      usuario = await Usuario.findById(usuario._id);

      return res.status(201).json(usuario);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      let usuario = await Usuario.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      );

      usuario = await Usuario.findById(usuario._id)

      return res.json(usuario);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      await Usuario.findByIdAndDelete(req.params.id);
      return res.json({ success: true });
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
}

export default new UsuarioService();
