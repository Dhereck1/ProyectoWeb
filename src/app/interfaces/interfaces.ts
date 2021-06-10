export interface paciente{
    idUsuario: number;
    rut: String; 
    contrasena:String;
    historiaClinica: String;
    rol:number;
    direccion: String;
    comuna: String;
    correo: String;
    nombre: String;
    apellido: String;
}

export interface cita{
    idCita: number;
    idUsuario: number;
    idMedico: number;
    fecha:string;
    hora:string;
    descripcion: string;
    estado:string;
}

export interface medico{
    idMedico: number;
    nombre: string;
    apellido: string;
    especialidad: string;
}