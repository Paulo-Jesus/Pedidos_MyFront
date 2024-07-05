export interface UsuarioDTO {
    code:    number;
    message: string;
    data:    DatumUsuarioDTO[];
}

export interface DatumUsuarioDTO {
    idUsuario: number;
    cedula:    string;
    nombre:    string;
    telefono:  string;
    direccion: string;
    idCuenta:  number;
    idEmpresa: number;
    idEstado:  number;
}