import { Curso } from './Curso';
import { Usuario } from './Usuario';
export interface Persona {

    _id : string;
    
    cedula : string;

    nombre : string;

    apellido : string;

    fecha_nacimiento : Date;
    
    sexo : string;

    usuario : Usuario;

    curso ?: Curso;

    observaciones ?: string;

    estado ?: number;


}