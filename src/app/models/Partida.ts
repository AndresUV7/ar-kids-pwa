import { DetallePartida } from './DetallePartida';
export interface Partida {

    _id ?: string;

    fecha_inicio ?: Date,

    fecha_fin ?: Date,
    
    detalles_partida ?: DetallePartida[],
    
    nombre?:string,
    
    estado ?: number,

}