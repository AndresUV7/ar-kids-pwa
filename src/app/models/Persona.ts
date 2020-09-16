import { Curso } from './Curso';
export interface Persona {

    _id : string;
    
    cedula : string;

    nombre : string;

    apellido : string;

    fecha_nacimiento : Date;
    
    sexo : string;

    observaciones ?: string;

    curso ?: Curso;

    estado ?: number;


}