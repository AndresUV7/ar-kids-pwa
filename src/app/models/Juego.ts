import { Recurso } from './Recurso';
import { Partida } from './Partida';
export interface Juego {

    _id ?: string;
    usuario : string;
    nombre : string;
    descripcion : string;
    updated ?: string;
    partidas ?: Partida[],
    recursos ?: Recurso[],
    estado?: number


}    