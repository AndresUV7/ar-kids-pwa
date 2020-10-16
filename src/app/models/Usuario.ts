import { Sesion } from './Sesion';
export interface Usuario {

    _id : string;

    contrasena : string;

    sesiones ?: string[]

    estado ?: number;

}