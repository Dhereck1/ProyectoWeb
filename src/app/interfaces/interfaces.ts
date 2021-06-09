export interface paciente{
    idPaciente: number;
    nombre: String;
    apellido: String;
    rut: String; 
    region: String;
    comuna: String;
    correo: String;
    direccion: String;
    historia: String;
    contrasena:String;
}

export interface cita{
    idCita: number;
    idMedico: number;
    idPaciente: number;
    descripcion: string;
    estado:string;
    fecha:string;
    hora:string;
}

export interface medico{
    idMedico: number;
    nombre: string;
    apellido: string;
    especialidad: string;
}