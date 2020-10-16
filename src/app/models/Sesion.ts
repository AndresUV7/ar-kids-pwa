import { Usuario } from './Usuario';
export interface Sesion {

    _id : string;

    fecha_inicio: Date;

    fecha_fin: Date;

    tipo_dispositio: number;

    usuario : string;

    estado ?: string;


}    