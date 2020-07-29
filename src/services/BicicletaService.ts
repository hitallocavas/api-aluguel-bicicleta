import { Request, Response } from "express";
import { Bicicleta } from "../schemas/Bicicleta";

class BicicletaService {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const bicicletas = await Bicicleta.find();

      return res.json(bicicletas);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const bicicleta = await Bicicleta.findById(req.params.id)

      return res.json(bicicleta);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      let bicicleta = req.body;
      bicicleta.status = "LIVRE";
      bicicleta = await Bicicleta.create(bicicleta);

      bicicleta = await Bicicleta.findById(bicicleta._id);

      return res.status(201).json(bicicleta);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      let bicicleta = await Bicicleta.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      );

      bicicleta = await Bicicleta.findById(bicicleta._id)

      return res.status(200).json(bicicleta);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      await Bicicleta.findByIdAndDelete(req.params.id);
      return res.json({ success: true });
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
}

export default new BicicletaService();
