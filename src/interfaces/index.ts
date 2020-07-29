export interface IBicicleta {
  marca: string;
  usuario?: IUsuario;
  status: string;
}

export interface IUsuario {
  nome: string;
  cpf: string;
}
