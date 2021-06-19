export interface paciente{
    idUsuario: number;
    rut: String; 
    contrasena:String;
    historiaClinica: String;
    rol:number;
    direccion: String;
    comuna: String;
    region:String;
    correo: String;
    nombre: String;
    apellido: String;
}

export interface cita{
    idCita: number;
    idUsuario: number;
    idMedico?: number;
    fecha:string;
    hora:string;
    descripcion: string;
    estado:string;
    medico?: string; // ?  significa que este campo es opcional
    usuario?: string;
}

export interface medico{
    idMedico: number;
    nombre: string;
    apellido: string;
    especialidad: number;
    especialidadNombre?: string;
}