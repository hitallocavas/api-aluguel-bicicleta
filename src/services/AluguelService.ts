import { Request, Response } from "express";
import { Usuario } from "../schemas/Usuario";
import { Bicicleta } from "../schemas/Bicicleta";

class UsuarioService {

  public async alugar(req: Request, res: Response): Promise<Response> {
    try {
      let usuario = await Usuario.findById(req.params.usuarioId);
      let bicicleta = await Bicicleta.findByIdAndUpdate(req.params.bicicletaId, {usuario: usuario, status: 'ALUGADA'});
      bicicleta = await Bicicleta.findById(req.params.bicicletaId);
      res.send(bicicleta);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

}

export default new UsuarioService();
