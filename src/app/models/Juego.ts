import { Recurso } from './Recurso';
import { Partida } from './Partida';
export interface Juego {

    _id ?: string;
    usuario : string;
    nombre : string;
    descripcion : string;
    partidas ?: Partida[],
    recursos ?: Recurso[],
    estado?: number


}    