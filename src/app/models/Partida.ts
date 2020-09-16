export interface Partida {

    _id ?: string;

    usuario : string;

    fecha_inicio ?: Date,

    fecha_fin ?: Date,
    
    detalles_partida ?: string[],
    
    estado ?: number,

}