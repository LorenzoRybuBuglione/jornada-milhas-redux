import server from "assets/server";
import { Usuario } from "src/types/usuario";
import uuid from "react-native-uuid";

const usuarios = server.usuarios;

export const carregarUsuarios = (): Promise<Usuario[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(usuarios), 1000));
};

export const usuarioExistente = (
  arrayDeUsuarios: Usuario[],
  emailOuCpf: Usuario['email'] | Usuario['cpf'], 
  senha: Usuario['senha']) => {

  const usuario = arrayDeUsuarios.find((usuarioNoServidor) =>
    [usuarioNoServidor.cpf, usuarioNoServidor.email].includes(emailOuCpf) && senha === usuarioNoServidor.senha
  );
  return usuario;
};