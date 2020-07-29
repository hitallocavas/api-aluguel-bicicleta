import { Router } from "express";
import BicicletaService from "./services/BicicletaService";
import UsuarioService from "./services/UsuarioService";
import AluguelService from "./services/AluguelService";

const routes = Router();
const versionApi = '/v1/api'

// bicicleta
routes.get(`${versionApi}/bicicletas`, BicicletaService.index);
routes.get(`${versionApi}/bicicletas/:id`, BicicletaService.show);
routes.post(`${versionApi}/bicicletas`, BicicletaService.store);
routes.put(`${versionApi}/bicicletas/:id`, BicicletaService.update);
routes.delete(`${versionApi}/bicicletas/:id`, BicicletaService.delete);

// usuario
routes.get(`${versionApi}/usuarios`, UsuarioService.index);
routes.get(`${versionApi}/usuarios/:id`, UsuarioService.show);
routes.post(`${versionApi}/usuarios`, UsuarioService.store);
routes.put(`${versionApi}/usuarios/:id`, UsuarioService.update);
routes.delete(`${versionApi}/usuarios/:id`, UsuarioService.delete);

// aluguel
routes.put(`${versionApi}/alugueis/:usuarioId/:bicicletaId`, AluguelService.alugar);

export default routes;
